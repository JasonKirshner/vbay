module.exports = (sequelize, DataTypes) => {
  const Recipient = sequelize.define('Recipient', {
    recipient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
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
    // associations can be defined here
  }
  return Recipient
}