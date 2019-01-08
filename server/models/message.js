module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    parent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recipient: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Message.associate = function (models) {
    Message.belongsTo(models.Message, {
      foreignKey: 'parent',
      targetKey: 'id'
    })
    Message.belongsTo(models.User, {
      foreignKey: 'sender',
      targetKey: 'id'
    })
    Message.belongsTo(models.User, {
      foreignKey: 'recipient',
      targetKey: 'id'
    })
  }
  return Message
}