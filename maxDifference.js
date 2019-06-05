function maxDifference(arr) {
  let largestDiff = 0,
    length = arr.length,
    maxRight = arr[length - 1];

  for (let i = length - 1; i >= 0; i--) {
    if (arr[i] > maxRight) {
      maxRight = arr[i];
    } else {
      let currentDiff = maxRight - arr[i];
      if (currentDiff > largestDiff) largestDiff = currentDiff;
    }
  }
  return largestDiff === 0 ? -1 : largestDiff;
}

console.log(maxDifference([7, 2, 3, 10, 2, 4, 8, 1]));
