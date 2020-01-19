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
    const input = JSON.parse(req.body);
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

// Get a specific review route
// app.get("review/:review", function(req, res){
//   if (req.params.review) {
//     Review.findAll({
//       where: {
//         restaurant: req.params.review
//       }
//     }).then(function(results){
//       res.json(results);
//     });
//   }
// });

// Get all reviews of a specific country
app.get("/country/:country", function(req, res){
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
app.get("/author/:author", function(req, res){
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
app.post("/new", function(req, res){
  Review.create({
    author: req.body.author,
    restaurant: req.body.restaurant,
    cuisine: req.body.cuisine,
    country: req.body.country,
    text: req.body.text
  });
});

// Delete a review
app.post("/delete", function(req, res){
  Review.destroy({
    where: {
      id: req.body.id
    }
  });
});

};
