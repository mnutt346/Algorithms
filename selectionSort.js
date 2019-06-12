const selectionSort = arr => {
  let minIndex;

  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

console.log(selectionSort([2, 1, 6, 3, 5, 4]));
console.log(selectionSort([4, 2, -3, 1, 3, 0, -1, -2]));
