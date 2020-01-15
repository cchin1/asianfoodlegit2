// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// STARTER CODE FOR ASIANFOODLEGIT2

// Dependencies
// =============================================================

// Require the Review model and others

/*
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {

// Get all restaurant reviews
// Get a specific review
// Get all reviews of a specific country or cuisine
// Get all reviews from a specific reviewer
// Add a review
// Delete a review

  // Get all chirps
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM chirps";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a chirp
  app.post("/api/new", function(req, res) {
    console.log("Chirp Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO chirps (author, body, created_at) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("Chirp Successfully Saved!");
      res.end();
    });
  });
};
*/
