const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Token', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Value: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'Token',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Token",
        unique: true,
        fields: [
          { name: "Id" },
        ],
      },
    ],
  });
};
