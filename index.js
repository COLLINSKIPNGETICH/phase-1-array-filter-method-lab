// array of drivers
const drivers = [
  { name: "John", hometown: "New York" },
  { name: "Alice", hometown: "Chicago" },
  { name: "Bob", hometown: "Los Angeles" },
  { name: "Charlie", hometown: "Miami" },
  { name: "Bobby", hometown: "City" },
  { name: "bobby", hometown: "Town" },
  { name: "Sammy", hometown: "City" },
  { name: "Sarah", hometown: "Town" },
  { name: "Sally", hometown: "City" },
];

// Function to find matching drivers by name 
function findMatching(driversArray, query) {
  return driversArray.filter(driver => driver.name && driver.name.toLowerCase().includes(query.toLowerCase()));
}

// Function to find drivers whose names begin with provided letters
function fuzzyMatch(driversArray, query) {
  return driversArray.filter(driver => driver.name && driver.name.toLowerCase().startsWith(query.toLowerCase()));
}

// Function to find drivers by name in an array of driver objects
function matchName(driversArray, query) {
  return driversArray.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}

// Testing the functions
console.log(findMatching(drivers, "b")); 
console.log(fuzzyMatch(drivers, "s")); 
console.log(matchName(drivers, "Alice")); 

