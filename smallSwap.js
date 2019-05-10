/*
Given an array of negative/positive integers, swap the smallest element of the array with the first element of the array.
*/

const smallSwap = numbers => {
  if (!numbers.length) return [];

  let smallest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  let smallestIndex = numbers.indexOf(smallest);

  [numbers[0], numbers[smallestIndex]] = [numbers[smallestIndex], numbers[0]];

  return numbers;
};
