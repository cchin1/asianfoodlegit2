'use strict';

const DataTypes = require('sequelize').DataTypes;

// Get a connected instance of Sequelize.
const instance = require("../config/connection.js");

// Define the model
const model = (sequelizeInstance, DataTypes) => {
  const Review = sequelizeInstance.define('Review', {
    author: DataTypes.STRING,
    pictureurl: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    restaurant: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    country: DataTypes.STRING,
    blurb: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };

  // In case migrations have not been run, do the DDL to create the table.
  Review.sync();
  return Review;
};

// Return the model with a connection to the database.
module.exports = model(instance, DataTypes);
