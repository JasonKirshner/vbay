module.exports = (sequelize, DataTypes) => {
  const Trade = sequelize.define('Trade', {
    game: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trader: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Trade.associate = (models) => {
    Trade.hasMany(models.Offer, {
      foreignKey: 'trade',
      as: 'offers'
    })
    Trade.hasOne(models.CompletedTrade, {
      foreignKey: 'trade'
    })
  }
  return Trade
}