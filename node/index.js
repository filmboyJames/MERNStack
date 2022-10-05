console.log("Hello");

const { add, subtract, multiply, divide } = require("./maths"); //Import everything from maths.js

console.log("2+2 =", add(2,2));

// const maths = require("./maths"); //Import everything from maths.js

// console.log("2+2 =", maths.sum(2,2)); // Need maths.sum as it was not destructured in this version

const getPoke = require("./poke.js");

getPoke();