let eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
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


let middle = (arr) => {
  const middleElement = [];
  const arrLength = arr.length;
  if (arrLength > 2 && arrLength % 2 === 1) {
    middleElement.push(arr[Math.floor(arrLength / 2)]);
  } else if (arrLength > 2 && arrLength % 2 === 0) {
    middleElement.push(arr[arrLength / 2 - 1], arr[arrLength / 2]);
  }
  return middleElement;
};



assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
