const http = require('http');
const randomToken = require('random-token');

const port = 3000;
const express = require('express');

const app = express();
const json = express.json();
const Sequelize = require('sequelize');
const path = require("path");
const { initModels } = require("./models/init-models.js");
const Fetty = require("./fettyjs/index.js");

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

const {
  User, Token, Error, Project,
} = initModels(sequelize);
sequelize.sync().then(() => {
  console.log('SQL is connected');
});
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
app.get('/*', (req, res, next) => {
  if (req.path.includes('api')) {
    return next();
  }
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => console.log('Server is started'));

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
app.post('/api/post/user', (req, res) => {
  res.contentType("application/json");
  const { email, password } = req.query;
  const token = randomToken.create("abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")(16);
  Token.create({ Value: token }).then((tokenPostResult) => {
    User.create({ Email: email, Password: password, TokenId: tokenPostResult.Id }).then((user) => {
      if (user) res.json({ ...user.dataValues, token });
      else res.json({ error: "User not created" });
    });
  });
});
app.get('/api/user', (req, res, next) => {
  const { token } = req.query;
  if (!token) next();
  else {
    Token.findAll({ raw: true }).then((tokens) => {
      const validToken = tokens.find((tokenItem) => tokenItem.Value === token);
      if (!validToken) {
        res.json({ error: "Not found!" });
        next();
        return;
      }
      User.findOne({ where: { TokenId: validToken.Id } }).then((user) => res.json({ ...user.dataValues, token }));
    });
  }
});

app.post('/api/post/project', (req, res, next) => {
  const { userIdCreator, name } = req.query;
  if (!userIdCreator || !name) next();
  else {
    const token = randomToken.create("abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")(16);
    Project.create({ UserIdCreator: userIdCreator, Name: name, TokenAPI: token })
      .then((response) => {
        Error.findAll({ where: { ProjectId: response.Id } }).then((errors) => {
          res.json({ ...response.dataValues, errors });
        });
      });
  }
});

app.get('/api/project', (req, res, next) => {
  const { userId } = req.query;
  if (!userId) next();
  else {
    Project.findAll({ where: { UserIdCreator: userId }, raw: true }).then((response) => {
      const newResponse = response.map((project) => {
        const projectCopy = project;
        return Error.findAll({ where: { ProjectId: project.Id } }).then((errors) => {
          projectCopy.errors = errors.map((item) => item.dataValues);
          return projectCopy;
        });
      });
      Promise.all(newResponse).then((result) => res.json(result));
    });
  }
});
app.post('/api/post/error', (req, res, next) => {
  const { token, errorBody } = req.query;
  if (!token || !errorBody) next();
  else {
    Project.findOne({ where: { TokenAPI: token } }).then((project) => {
      User.findByPk(project.UserIdCreator).then((user) => {
        Error.create({ TokenId: user.TokenId, Body: errorBody, ProjectId: project.Id })
          .then((error) => {
            res.json(error);
          });
      });
    });
  }
});
app.get('/api/user', (req, res, next) => {
  const { password, email } = req.query;
  if (!password || !email) next();
  else {
    User.findOne({ where: { Email: email, Password: password } }).then((user) => {
      if (!user) {
        res.json({ error: "Not found" });
        next();
        return;
      }
      Token.findOne({ where: { Id: user.TokenId } }).then((token) => {
        if (user) res.json({ ...user.dataValues, token: token.Value });
        else res.json({ error: "Not found" });
      });
    });
  }
});
app.get('/api/fetty.js', (req, res) => {
  res.send(Fetty.toString());
});
