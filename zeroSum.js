/*
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.
*/

const zeroSum = numbers => {
  let sortedNumbers = numbers.sort(),
    end = sortedNumbers.length - 1,
    start = 0;

  if (sortedNumbers[0] > 0 || sortedNumbers.length < 2) return false;
  while (start !== end) {
    if (Math.abs(sortedNumbers[start]) === sortedNumbers[end]) {
      return true;
    } else if (Math.abs(sortedNumbers[start] < sortedNumbers[end])) {
      end--;
    } else if (Math.abs(sortedNumbers[start] > sortedNumbers[end])) {
      start++;
    }
  }
  return false;
};

console.log(zeroSum([1, 2, 3, 4]));
console.log(zeroSum([-3, 0, 5, 2, 3, 6, 4]));
console.log(zeroSum([1]));
