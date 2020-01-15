// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Review" model that matches up with DB
var Review = sequelize.define("Review", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    author: Sequelize.STRING,
    cuisine: Sequalize.STRING,
    country: Sequelize.STRING,
    body: Sequelize.STRING,
    created_at: Sequelize.DATE
  });
  
  // Sync with DB
  Review.sync();
  
  // Makes the Model available for other files (will also create a table)
  module.exports = Review;
