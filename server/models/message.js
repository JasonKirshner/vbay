module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    parent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Messages',
        key: 'id'
      }
    },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    recipient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Messages',
        key: 'id'
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Message.associate = function (models) {
    // associations can be defined here
  }
  return Message
}