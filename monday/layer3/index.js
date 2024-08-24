
function findOldestAndYoungest(data) {
  let oldest = data[0];
  let youngest = data[0];

  for (const user of data) {
    if (user.age > oldest.age) {
      oldest = user;
    }
    if (user.age < youngest.age) {
      youngest = user;
    }
  }
  console.log(`User ${oldest.name} is oldest, age ${oldest.age}`);
  console.log(`User ${youngest.name} is youngest, age ${youngest.age}`);
}
module.exports = findOldestAndYoungest