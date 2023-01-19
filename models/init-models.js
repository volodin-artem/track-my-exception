const { DataTypes } = require("sequelize");
const _Error = require("./Error");
const _Project = require("./Project");
const _Token = require("./Token");
const _User = require("./User");

function initModels(sequelize) {
  const Error = _Error(sequelize, DataTypes);
  const Project = _Project(sequelize, DataTypes);
  const Token = _Token(sequelize, DataTypes);
  const User = _User(sequelize, DataTypes);

  Error.belongsTo(Project, { as: "Project", foreignKey: "ProjectId" });
  Project.hasMany(Error, { as: "Errors", foreignKey: "ProjectId" });
  Error.belongsTo(Token, { as: "Token", foreignKey: "TokenId" });
  Token.hasMany(Error, { as: "Errors", foreignKey: "TokenId" });
  User.belongsTo(Token, { as: "Token", foreignKey: "TokenId" });
  Token.hasMany(User, { as: "Users", foreignKey: "TokenId" });
  Project.belongsTo(User, { as: "UserIdCreator_User", foreignKey: "UserIdCreator" });
  User.hasMany(Project, { as: "Projects", foreignKey: "UserIdCreator" });

  return {
    Error,
    Project,
    Token,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
