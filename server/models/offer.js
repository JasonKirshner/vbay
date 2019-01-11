module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    offerer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Offer.associate = function (models) {
    Offer.hasOne(models.CompletedTrade, {
      foreignKey: 'offer'
    })
  }
  return Offer
}