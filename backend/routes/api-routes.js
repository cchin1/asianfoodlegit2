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
app.get("/api/:review", function(req, res){
  if (req.params.review) {
    Review.findAll({
      where: {
        restaurant: req.params.review
      }
    }).then(function(results){
      res.json(results);
    });
  }
});

// Get all reviews of a specific country
app.get("/api/country/:country", function(req, res){
  if (req.params.country) {
    Review.findAll({
      where: {
        country: req.params.country
      }
    }).then(function(results){
      res.json(results);
    });
  }
});

// Get all reviews from a specific reviewer
app.get("/api/author/:author", function(req, res){
  if (req.params.author) {
    Review.findAll({
      where: {
        restaurant: req.params.author
      }
    }).then(function(results){
      res.json(results);
    });
  }
});

// Add a review
app.post("/api/new", function(req, res){

  Review.create({
    author: req.body.author,
    restaurant: req.body.restaurant,
    cuisine: req.body.cuisine,
    country: req.body.country,
    text: req.body.text
  });
});

// Delete a review
app.post("/api/delete", function(req, res){
  Review.destroy({
    where: {
      id: req.body.id
    }
  });
});

};
