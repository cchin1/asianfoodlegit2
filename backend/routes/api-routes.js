// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Require the Review model
const Review = require("../models/review.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Get a single review by it's primary key ID.
  app.get("/review/:id", function(req, res) {
    if (req.params.id) {
      Review.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(result){
        res.json(result);
      });
    }
  });

  // Create a single review
  app.post("/review", function(req, res) {
    console.log("-- Received new review ----------------------");
    console.log(req.body);
    const input = req.body;
    Review.create({
        author: input.author,
        pictureurl: input.pictureurl,
        rating: input.rating,
        restaurant: input.restaurant,
        cuisine: input.cuisine,
        country: input.country,
        blurb: input.blurb,
      }).then((result) => {
        res.body = JSON.stringify(result);
        res.status = 200;
        res.end(res.body);
      })
  });

  // Get all restaurant reviews
  app.get("/reviews", function(req, res){
    Review.findAll({}).then(function(results){
      res.json(results);
    });
  });

// Get all reviews of a specific country
app.get("/reviews/country/:country", function(req, res){
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
  app.get("/reviews/author/:author", function(req, res){
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

  // Delete a review
  app.delete("/review/:id", function(req, res){
    Review.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.status = 204;
      res.end("{}");
    })
  });
};
