module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    auction: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  })
  Sale.associate = function (models) {}
  return Sale
}