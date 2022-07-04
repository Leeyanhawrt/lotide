const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

console.log(eqArrays(["2",3], ["2",3]))
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);