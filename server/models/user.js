module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
  User.associate = function (models) {
    User.hasMany(models.Auction, {
      foreignKey: 'auctioneer',
      as: 'selling'
    })
    User.hasMany(models.Bid, {
      foreignKey: 'bidder',
      as: 'bidding'
    })
    User.hasMany(models.Trade, {
      foreignKey: 'trader',
      as: 'trading'
    })
    User.hasMany(models.Offer, {
      foreignKey: 'offerer',
      as: 'offering'
    })
    User.hasMany(models.Message, {
      foreignKey: 'sender',
      as: 'sent'
    })
    User.hasMany(models.Recipient, {
      foreignKey: 'recipient',
      as: 'inbox'
    })
    User.hasMany(models.DeletedMsg, {
      foreignKey: 'remover'
    })
  }
  return User
}