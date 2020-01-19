// This file writes a JavaScript files, constants.js, which houses some constants that need to change depending
// whether we are in production vs. local development. We are writing a Node.js program to do this because some
// team members are on *nix and others others are on Windows making shell scripts problematic.

const fs = require('fs');
const path = require('path');

// node generate-constants.js prod
// node generate-constants.js dev
const ENV_ARG = process.argv[2]

if (ENV_ARG !== "dev" && ENV_ARG !== "prod") {
    console.error("You must provide the argument either 'prod' or 'dev'");
    process.exit(1);
}

console.log("GENERATING BUILD CONSTANTS");

// These are the constants that we want to write to the generated-constants.js file.
// Put the default (development) values here.
const VALUES = {
    // these are the 'default' values
    BACKEND_PROTOCOL: "http",
    BACKEND_HOSTNAME: "localhost",
    BACKEND_PORT: "3000",
}

// If we are running in production mode, use these values instead.
if (ENV_ARG==="prod") {
    // https://asianfoodlegit2.herokuapp.com/
    VALUES.BACKEND_PROTOCOL = "https";
    VALUES.BACKEND_HOSTNAME = "asianfoodlegit2.herokuapp.com";
    VALUES.BACKEND_PORT = "443";
}

// This is some trickery to make a 'pretty' line separater that is exactly the
// width of the console.
const WIDTH = process.stdout.columns || 80;
let SEP = "";

for (let i = 0; i < WIDTH; ++i) {
  SEP += "-"
}

const printSeparator = () => {
  console.log(SEP)
}

// Print a separator
printSeparator()

// This is some trickery to line up all of the equals signs to make the console
// output easier to read.
let maxKeyLength = 0;

for (const key in VALUES) {
  if (key.length > maxKeyLength) {
    maxKeyLength = key.length
  }
}

const pad = (str) => {
  let result = str
  const spaces = maxKeyLength - result.length;
  for (let i = 0; i < spaces; ++i) {
    result += " ";
  }
  return result;
}

// It is possible to override the values found in our VALUES struct by passing
// the values in as environment variables. This loops over each key in the VALUES
// object and checks if there is an environment value by that name. If so, it
// takes the value from that environment value and overwrites what was previously
// in the VALUES object for that key. Also write them to the console.
for (let [key, value] of Object.entries(VALUES)) {
  if (process.env[key]) {
      console.log(`${pad(key)} = '${process.env[key]}' # found in environment`)
      VALUES[key] = process.env[key];
  } else {
      console.log(`${pad(key)} = '${value}' # default`)
  }
}

// Here we generate the contents of the generated-constants.js file, and hold it
// in a string.
let js = "export const GENERATED_CONSTANTS = {\n"

for (let [key, value] of Object.entries(VALUES)) {
  js += "  " + key;
  js += ": ";
  js += JSON.stringify(value);
  js += ",\n";
}

js += "};\n";


// Print a separator to the console
printSeparator()

// Write the generated-constants.js file.
const filename = path.join(__dirname, "generated-constants.js");
fs.writeFileSync(filename, js)