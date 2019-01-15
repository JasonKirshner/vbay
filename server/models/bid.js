module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define('Bid', {
    bidder: {
      type: DataTypes.STRING,
      allowNull: false
    },
    auction: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  })
  Bid.associate = function (models) {
    Bid.hasOne(models.Sale, {
      foreignKey: 'bid'
    })
  }
  return Bid
}