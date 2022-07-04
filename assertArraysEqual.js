const eqArrays = require('./eqArrays')

let assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed! Array: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed! Array: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;