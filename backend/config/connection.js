//Setting up the connection to MySQL

const ENVIRONMENT = require("./environment");

// Require mysql
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize(ENVIRONMENT.DB_NAME, ENVIRONMENT.DB_USERNAME, ENVIRONMENT.DB_PASSWORD, {
    host: ENVIRONMENT.DB_HOSTNAME,
    port: ENVIRONMENT.DB_PORT,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
  
  // Exports the connection for other files to use
  module.exports = sequelize;
  