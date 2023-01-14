var DataTypes = require("sequelize").DataTypes;
var _Error = require("./Error");
var _Token = require("./Token");
var _User = require("./User");

function initModels(sequelize) {
  var Error = _Error(sequelize, DataTypes);
  var Token = _Token(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  Error.belongsTo(Token, { as: "Token", foreignKey: "TokenId"});
  Token.hasMany(Error, { as: "Errors", foreignKey: "TokenId"});
  User.belongsTo(Token, { as: "Token", foreignKey: "TokenId"});
  Token.hasMany(User, { as: "Users", foreignKey: "TokenId"});

  return {
    Error,
    Token,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
