module.exports = (sequelize, DataTypes) => {
  const Auction = sequelize.define('Auction', {
    auctioneer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startprice: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  })
  Auction.associate = (models) => {
    Auction.hasMany(models.Bid, {
      foreignKey: 'auction',
      as: 'bids'
    })
  }
  return Auction
}