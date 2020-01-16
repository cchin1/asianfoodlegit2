// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Require the Review model
var Review = require("../models/review.js");

// Routes
// =============================================================
module.exports = function(app) {

// Get all restaurant reviews route
app.get("/api/all", function(req, res){
  Review.findAll({}).then(function(results){
    res.json(results);
  });
});

// Get a specific review route


// Get all reviews of a specific country or cuisine


// Get all reviews from a specific reviewer


// Add a review


// Delete a review