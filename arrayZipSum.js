/*
Given two arrays of negative/positive integers, return a new array such that each element at index n is the sum of the two elements from the other arrays at their index n’s.
*/

const zipSum = (xs, ys) => {
  let sums = [],
    shorterListLength = Math.min(xs.length, ys.length);

  for (let i = 0; i < shorterListLength; i++) {
    sums.push(xs[i] + ys[i]);
  }

  return sums;
};

console.log(zipSum([10, 20, 30], [1, 2, 3]));
console.log(zipSum([11, 15, 17], [-2, 5, 3]));
console.log(zipSum([1, 4], [4, 5, 6]));
console.log(zipSum([40, 40, 40], [10, 3]));
