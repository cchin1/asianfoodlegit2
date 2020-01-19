//Setting up the connection to MySQL

const ENVIRONMENT = require ("./environment");

// Require mysql
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("asianfoodlegit2", "root", "JS123$$$", {
    host: ENVIRONMENT.DB_HOSTNAME,
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
  
  // Exports the connection for other files to use
  module.exports = sequelize;
  