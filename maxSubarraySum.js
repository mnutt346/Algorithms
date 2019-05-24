/*
Given an array of integers and a number, write a function which finds the maximum sum of a subarray witht the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array.
*/

const maxSubarraySum = (ints, len) => {
  if (ints.length < len) return null;

  let max = 0;

  for (let i = 0; i <= ints.length - len; i++) {
    let currentSum = 0;
    currentSum = ints
      .slice(i, len + i)
      .reduce((accum, current) => accum + current);
    max = Math.max(max, currentSum);
  }

  return max;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([2, 3], 3));
