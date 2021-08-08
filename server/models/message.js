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
    Message.hasOne(models.Message, {
      foreignKey: 'parent'
    })
    Message.hasMany(models.DeletedMsg, {
      foreignKey: 'message',
      as: 'deletions'
    })
    Message.hasOne(models.Recipient, {
      foreignKey: 'recipient',
    })
  }
  return Message
}