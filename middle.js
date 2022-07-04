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

module.exports = middle;

