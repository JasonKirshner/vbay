'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DeletedMsgs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Messages',
          key: 'id'
        }
      },
      remover: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      removed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DeletedMsgs');
  }
};