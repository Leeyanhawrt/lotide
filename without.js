let eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false
    }
  }
  return true;
};

let assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed! Array: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed! Array: ${arr1} !== ${arr2}`);
  }
};

let without = (arr, removeArr) => {
  const arrWithout = [];
  for (let i = 0; i<arr.length; i++) {
    if (!removeArr.includes(arr[i])) {
      arrWithout.push(arr[i]);
    }
  }
  return arrWithout;
}