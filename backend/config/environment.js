// This file is for deplying MySQL to Production

const ENVIRONMENT = {
    DB_HOSTNAME: process.env.DB_HOSTNAME || "localhost",
    DB_PORT: process.env.DB_PORT || "3306",
    DB_PASSWORD: process.env.DB_PASSWORD || "JS123$$$",
}
  // Exports the connection for other files to use
  module.exports = ENVIRONMENT;