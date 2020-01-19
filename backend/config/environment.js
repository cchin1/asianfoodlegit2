// This file is for deplying MySQL to Production

const ENVIRONMENT = {
    DB_HOSTNAME: process.env.DB_HOSTNAME || "localhost",
    DB_PORT: process.env.DB_PORT || "3306",
    DB_PASSWORD: process.env.DB_PASSWORD || "JS123$$$",
    DB_USERNAME: process.env.DB_USERNAME || "root",
    DB_NAME: process.env.DB_NAME || "asianfoodlegit2",
}
  // Exports the connection for other files to use
  module.exports = ENVIRONMENT;