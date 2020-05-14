var assert = require('assert').strict;

var isOdd = require("./index.js");

assert.equal(false, isOdd(42), "42 is odd");
assert.equal(true, isOdd(43), "43 is not odd");
assert.equal(true, isOdd(1), "1 is not odd");
assert.equal(false, isOdd(0), "0 is odd");
assert.equal(true, isOdd(-1), "-1 is not odd");
assert.equal(false, isOdd(-42), "-42 is odd");
console.log("all tests passed.");
