'use strict'
module.exports = (sequelize, DataTypes) => {
  const DeletedMsg = sequelize.define('DeletedMsg', {
    message: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Messages',
        key: 'id'
      }
    },
    remover: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    removed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })
  DeletedMsg.associate = function (models) {
    DeletedMsg.belongsTo(models.Message, {
      foreignKey: 'message',
      targetKey: 'id'
    })
    DeletedMsg.belongsTo(models.User, {
      foreignKey: 'remover',
      targetKey: 'id'
    })
  }
  return DeletedMsg
}