module.exports = (sequelize, DataTypes) => {
  const Recipient = sequelize.define('Recipient', {
    recipient: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isread: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })
  Recipient.associate = function (models) {
    Recipient.hasOne(models.Message, {
      foreignKey: 'recipient'
    })
    Recipient.hasOne(models.User, {
      foreignKey: 'recipient'
    })
  }
  return Recipient
}