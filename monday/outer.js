const helloFromLayer1 = require('./layer1');

const { data } = require("./layer2/data.js"); // Use .js extension
const { printUser } = require("./layer2/index.js"); // Use .js extension
const findOldestAndYoungest = require("./layer3"); // Use .js extension
// Call findOldestAndYoungest directly

// **Optional:** Error handling for missing modules
try {

  console.log(helloFromLayer1()); // Call helloFromLayer1 directly

  console.log("---");

  data.forEach(printUser); // Original approach

  console.log("=========");

  findOldestAndYoungest(data);
} catch (error) {
  console.error("Error importing modules:", error);
}