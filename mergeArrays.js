/*
In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

const mergeArrays = (array1, array2) => {
  let mergedArray = [];
  let currentMergedIndex = 0;
  let currentArray1Index = 0;
  let currentArray2Index = 0;
  while (currentMergedIndex < array1.length + array2.length) {
    const endOfArray1 = currentArray1Index > array1.length;
    const endOfArray2 = currentArray2Index > array2.length;

    if (
      !endOfArray1 &&
      (endOfArray2 || array1[currentArray1Index] < array2[currentArray2Index])
    ) {
      mergedArray[currentMergedIndex] = array1[currentArray1Index];
      currentArray1Index++;
    } else {
      mergedArray[currentMergedIndex] = array2[currentArray2Index];
      currentArray2Index++;
    }
    currentMergedIndex++;
  }
  return mergedArray;
};

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
