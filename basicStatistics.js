/*
You are given an array of N integers separated by spaces, all in one line.

Display the following:

Mean (m): The average of all the integers.

Median of this array: In case, the number of integers is odd, the middle element; else, the average of the middle two elements.

Mode: The element(s) which occurs most frequently. If multiple elements satisfy this criteria, display the numerically smallest one.
*/

const stats = input => {
  console.log(`${calcMean(input)}\n${calcMedian(input)}\n${calcMode(input)}`);
};

const calcMean = input => {
  let length = input.length;
  return input.reduce((a, b) => a + b) / length;
};

const calcMedian = input => {
  let median,
    length = input.length;
  // ----- Compute median -----
  // median of array with odd number of values
  if (length % 2 !== 0) {
    let middle = Math.floor(length / 2);
    median = input[middle];
  } else {
    // median of array with even number of values
    let midLeft = length / 2 - 1,
      midRight = length / 2;
    median = (midLeft + midRight) / 2;
  }
  return median;
};

const calcMode = input => {
  let mode,
    length = input.length;
  // ----- Compute mode -----
  // sort the input
  let sorted = input.sort((a, b) => a - b);
  // iterate through the sorted input using two pointers, finding the longest chain of repeated numbers;
  let counter = 0,
    highestCount = 0,
    modeStart = 0,
    modeEnd = 1;
  mode = sorted[0];
  while (modeEnd < length) {
    // if a chain of numbers is found, increase the counter for each consecutive repeated letter
    if (sorted[modeStart] === sorted[modeEnd]) {
      counter++;
      if (counter > highestCount) {
        highestCount = counter;
        mode = sorted[modeStart];
      }
      modeEnd++;
    } else {
      modeStart = modeEnd;
      modeEnd++;
    }
  }
  return mode;
};

stats([1, 2, 3, 4]);
stats([1, 2, 3, 4, 5]);
stats([2, 4, 6, 8, 22, 30]);
stats([3, 6, 2, 22, 11, 16, 18, 11]);
