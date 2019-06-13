const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotPoint = pivot(arr, left, right);
    quickSort(arr, left, pivotPoint - 1);
    quickSort(arr, pivotPoint + 1, right);
  }
  return arr;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivotValue = arr[start],
    pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }

  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

  return pivotIndex;
};

console.log(quickSort([3, 1, 2, -1, 5]));
