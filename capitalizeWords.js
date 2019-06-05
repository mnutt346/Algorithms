/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each work capitalized.
*/

const capitalizeWords = (arr, caps = []) => {
  while (arr.length) {
    caps.push(arr[0].toUpperCase());
    return capitalizeWords(arr.slice(1), caps);
  }
  return caps;
};

console.log(capitalizeWords(["cow", "chicken", "sheep"]));
