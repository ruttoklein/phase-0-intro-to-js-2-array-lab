// Write your solution here!
// index.js
const cats = ["Milo", "Otis", "Garfield"];

// Now you can use the 'cats' array in your code
// index.js
const cats = ["Milo", "Otis", "Garfield"];

// Export the 'cats' array
module.exports = { cats };

// indexTest.js
const { cats } = require('./index'); // Import the 'cats' array from index.js

// Now you can use the 'cats' array in your tests