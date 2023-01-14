const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TokenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Token',
        key: 'Id'
      }
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'User',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_User_1",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
