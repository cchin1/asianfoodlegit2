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

const VALUES = {
    // these are the 'default' values
    BACKEND_PROTOCOL: "http",
    BACKEND_HOSTNAME: "localhost",
    BACKEND_PORT: "3000",
}

if (ENV_ARG==="prod") {
    // https://asianfoodlegit2.herokuapp.com/
    VALUES.BACKEND_PROTOCOL = "https";
    VALUES.BACKEND_HOSTNAME = "asianfoodlegit2.herokuapp";
    VALUES.BACKEND_PORT = "443";

}

const WIDTH = process.stdout.columns || 80;
let SEP = "";

for (let i = 0; i < WIDTH; ++i) {
  SEP += "-"
}

const printSeparator = () => {
  console.log(SEP)
}

printSeparator()

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

for (let [key, value] of Object.entries(VALUES)) {
  if (process.env[key]) {
      console.log(`${pad(key)} = '${process.env[key]}' # found in environment`)
      VALUES[key] = process.env[key];
  } else {
      console.log(`${pad(key)} = '${value}' # default`)
  }
}

let js = "export const GENERATED_CONSTANTS = {\n"

for (let [key, value] of Object.entries(VALUES)) {
  js += "  " + key;
  js += ": ";
  js += JSON.stringify(value);
  js += ",\n";
}

js += "};\n";


printSeparator()
const filename = path.join(__dirname, "generated-constants.js");
console.log(`Writing to: ${filename}`)
if (VALUES.IQBID_LOG_LEVEL == "trace" || VALUES.IQBID_LOG_LEVEL == "debug") {
  console.log("\n", js)
}
printSeparator()


fs.writeFileSync(filename, js)