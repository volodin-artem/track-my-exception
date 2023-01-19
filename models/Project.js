const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Project', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserIdCreator: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'Id'
      }
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    TokenAPI: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Project',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Project",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
