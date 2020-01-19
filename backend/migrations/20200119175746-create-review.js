'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      author: {
        type: Sequelize.STRING
      },
      pictureurl: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      restaurant: {
        type: Sequelize.STRING
      },
      cuisine: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      blurb: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Reviews');
  }
};