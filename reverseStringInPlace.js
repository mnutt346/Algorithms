/*
Write a function that takes an array of characters and reverses the letters in place.
*/

const reverseString = stringArray => {
  let startPointer = 0,
    endPointer = stringArray.length - 1;

  while (startPointer < endPointer) {
    [stringArray[startPointer], stringArray[endPointer]] = [
      stringArray[endPointer],
      stringArray[startPointer]
    ];
    startPointer++;
    endPointer--;
  }
  return stringArray;
};

// O(n)

console.log(reverseString(["c", "a", "r"]));
console.log(reverseString(["b", "o", "a", "t"]));
