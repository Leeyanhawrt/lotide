const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("hello", "hello");

let countLetters = str => {
  const resultObj = {};
  for (const letter of str) {
    if (resultObj[letter]) {
      resultObj[letter]++;
    } else {
      resultObj[letter] = 1;
    }
  }
  return resultObj;
};

console.log(countLetters("Leeyan"));