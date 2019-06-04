/*
Write a recursive function called someRecursion which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise, it returns false.
*/

const someRecursion = (arr, callback) => {
  if (arr.length === 0) return false;
  return callback(arr.shift()) || someRecursion(arr, callback);
};

const isEven = num => {
  return num % 2 === 0;
};

console.log(someRecursion([2, 4, 6, 8], isEven));
console.log(someRecursion([1, 2, 3, 4], isEven));
console.log(someRecursion([1, 3, 5], isEven));
console.log(someRecursion([1, 3, 5, 7, 9, 10], isEven));
console.log(someRecursion([2, 4, 6, 8], num => num > 7));
