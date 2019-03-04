/*
Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.
*/

const highestProduct = ints => {
  let sortedInts = ints.sort((a, b) => {
    return a - b;
  });
  let end = sortedInts.length - 1;
  let highest = 0;

  if (sortedInts[end] < 0) {
    highest = sortedInts[0] * sortedInts[1] * sortedInts[2];
  } else if (sortedInts[end] > 0 && sortedInts[0] < 0) {
    highest = Math.max(
      sortedInts[0] * sortedInts[1] * sortedInts[end],
      sortedInts[end] * sortedInts[end - 1] * sortedInts[end - 2]
    );
  } else {
    highest = sortedInts[end] * sortedInts[end - 1] * sortedInts[end - 2];
  }

  return highest;
};

console.log(highestProduct([3, 5, 2, 6]));
console.log(highestProduct([-1, 5, 7, -19, 3]));
console.log(highestProduct([1, 1, 1]));
console.log(highestProduct([-1, -3, -5, -19, -2, -6]));
console.log(highestProduct([-10, -10, 1, 3, 2]));
