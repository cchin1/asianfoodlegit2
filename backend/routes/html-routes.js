// html-routes.js - this file offers a set of routes for sending users to the various html pages

// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

    // Each of the below routes handles the HTML page that the user gets sent to

    // Index route loads index.html
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });

    // Add route loads the add.html page, where users can enter new review to the db
    app.get("/add", function(req, res){
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });

    // All route loads to the all.html page, where all reviews in the db are displayed
    app.get("/all", function(req, res){
        res.sendFile(path.join(__dirname, "../public/all.html"));
    });

};