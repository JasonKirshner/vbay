module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Sales', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
      },
      auction: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Auctions',
          key: 'id'
        }
      },
      bid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Bids',
          key: 'bidid'
        }
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('Sales')
}