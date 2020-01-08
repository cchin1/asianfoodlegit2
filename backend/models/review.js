// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Reviewer" model that matches up with DB
// Need to tweak details for AFL2
var Reviewer = sequelize.define("Reviewer", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
asianfoodlegit2.sync();

// Makes the Model available for other files (will also create a table)
module.exports = Reviewer;

// Creates a "Review" model that matches up with DB
// Need to tweak details for AFL2
var Review = sequelize.define("Review", {
    author: Sequelize.STRING,
    body: Sequelize.STRING,
    created_at: Sequelize.DATE
  });
  
  // Syncs with DB
  asianfoodlegit2.sync();
  
  // Makes the Model available for other files (will also create a table)
  module.exports = Review;

// Creates a "Image" model that matches up with DB
// Need to tweak details for AFL2
var Image = sequelize.define("Image", {
    author: Sequelize.STRING,
    body: Sequelize.STRING,
    created_at: Sequelize.DATE
  });
  
  // Syncs with DB
  asianfoodlegit2.sync();
  
  // Makes the Model available for other files (will also create a table)
  module.exports = Image;
