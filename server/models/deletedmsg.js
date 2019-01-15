module.exports = (sequelize, DataTypes) => {
  const DeletedMsg = sequelize.define('DeletedMsg', {
    message: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    remover: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    removed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })
  DeletedMsg.associate = function (models) {}
  return DeletedMsg
}