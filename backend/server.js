const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();
const jsonParser = bodyParser.json()

const allowedOrigins = ['*',
                        '*'];

// app.use(cors({
//   origin: function(origin, callback) {
//     // allow requests with no origin 
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1) {
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/status", (req, res) => {
  res.json({ status: 'ok', message: "Hello Bishop!" })
});

app.listen(PORT, () => {
  console.log(`🐈🐈 Bones prefers port ${PORT} 🐈🐈`);
});

//Setting up the connection to MySQL

// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "JS123$$$",
  database: "asianfoodlegit2"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
