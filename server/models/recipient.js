module.exports = (sequelize, DataTypes) => {
  const Recipient = sequelize.define('Recipient', {
    recipient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Messages',
        key: 'id'
      }
    },
    isread: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  })
  Recipient.associate = function (models) {
    Recipient.belongsTo(models.User, {
      foreignKey: 'recipient',
      targetKey: 'id'
    })
    Recipient.belongsTo(models.User, {
      foreignKey: 'recipient',
      targetKey: 'id'
    })
  }
  return Recipient
}