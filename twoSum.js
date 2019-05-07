/*
You are given an array of numbers and a target value. Return the indices of the first two numbers within the array that add up to the target value as a tuple, and an empty array if no such numbers exist.
*/

const twoSum = (array, target) => {
  let numberTracker = {},
    indeces = [];

  for (let i = 0; i < array.length; i++) {
    let difference = target - array[i];

    if (numberTracker[difference.toString()] !== undefined) {
      let index1 = array.indexOf(difference);

      indeces.push(index1, i);
      return indeces;
    }

    numberTracker[array[i].toString()] = array[i];
  }

  return indeces;
};
