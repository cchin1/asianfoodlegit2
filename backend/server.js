const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

// Sets up the Express App
const app = express();
const jsonParser = bodyParser.json();

const allowedOrigins = ["*", "*"];

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

// Sets up the Express app to handle data parsting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static Directory
app.use(express.static("app/public"));

// Routes
require("./routes/api-routes.js")(app);

app.get("/status", (req, res) => {
  res.json({ status: "ok", message: "Hello Bishop!" });
});

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`🐈🐈 Bones prefers port ${PORT} 🐈🐈`);
});
