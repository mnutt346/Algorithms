/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

const capitalizeFirst = (arr, capitalized = []) => {
  if (arr.length === 0) return capitalized;
  capitalized.push(arr[0].replace(arr[0][0], arr[0][0].toUpperCase()));
  return capitalizeFirst(arr.slice(1), capitalized);
};

console.log(capitalizeFirst(["car", "taco", "banana"]));
