module.exports = (sequelize, DataTypes) => {
  const CompletedTrade = sequelize.define('CompletedTrade', {
    trade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    offer: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  CompletedTrade.associate = function (models) {}
  return CompletedTrade
}