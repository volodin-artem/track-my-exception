const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Error', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    TokenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Token',
        key: 'Id',
      },
    },
    Body: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    ProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Project',
        key: 'Id',
      },
    },
  }, {
    sequelize,
    tableName: 'Error',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Error",
        unique: true,
        fields: [
          { name: "Id" },
        ],
      },
    ],
  });
};
