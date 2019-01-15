module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    igdbid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  })
  Game.associate = (models) => {
    Game.hasMany(models.Auction, {
      foreignKey: 'game',
      onDelete: 'CASCADE'
    })
    Game.hasMany(models.Trade, {
      foreignKey: 'game',
      onDelete: 'CASCADE'
    })
    Game.hasMany(models.Offer, {
      foreignKey: 'game',
      onDelete: 'CASCADE'
    })
  }
  return Game
}