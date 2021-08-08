module.exports = (sequelize, DataTypes) => {
  const Recipient = sequelize.define('Recipient', {
    user: {
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
  Recipient.associate = function (models) {}
  return Recipient
}