const http = require('http');
const randomToken = require('random-token');

const port = 3000;
const express = require('express');

const app = express();
const json = express.json();
const Sequelize = require('sequelize');
const path = require("path");
const { initModels } = require("./models/init-models.js");

const { Op } = Sequelize;
const sequelize = new Sequelize(
  "TrackMyException",
  "admin",
  "eriksundberg1337",
  {
    dialect: "mssql",
    host: "HOME-PC",
  },
);

const { User, Token, Error } = initModels(sequelize);
sequelize.sync().then(() => {
  console.log('SQL is connected');
});
app.use((req, res, next) => {
  express.static(path.join(__dirname, 'public'));
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
app.get('/*', (req, res, next) => {
  if (req.path.includes('api')) {
    next();
  }
  return res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/api/user/:userId', (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  const { userId } = req.params;
  User.findOne({
    where: {
      Id: userId,
    },
  }).then((user) => {
    res.json(user);
  });
});
app.post('/api/post/user', express.json({ type: '*/*' }), (req, res) => {
  res.contentType("application/json");
  const { email, password } = req.query;
  const token = randomToken.create("abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")(16);
  Token.create({ Value: token }).then((tokenPostResult) => {
    User.create({ Email: email, Password: password, TokenId: tokenPostResult.Id }).then((user) => {
      if (user) res.json(user);
      else res.json({ error: "User not created" });
    });
  });
});
app.listen(port, () => console.log('Server is started'));
