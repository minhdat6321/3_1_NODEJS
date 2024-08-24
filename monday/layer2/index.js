const data = require("./data.js")

function printUser(data) {
  console.log(`User name is: ${data.name}`);
  console.log(`User age is: ${data.age}`);
}



module.exports = { printUser, data }