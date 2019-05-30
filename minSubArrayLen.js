const minSubArrayLen = (arr, target) => {
  let subArrStart = 0,
    subArrEnd = 1,
    sum = arr[subArrStart],
    minLength = Infinity,
    arrLength = arr.length;

  while (subArrEnd <= arrLength) {
    if (arr[subArrStart] >= target) return 1;
    if (arr[subArrEnd] >= target) return 1;

    if (sum < target) {
      sum += arr[subArrEnd++];
    } else {
      if (minLength > subArrEnd - subArrStart) {
        minLength = subArrEnd - subArrStart;
      }
      sum -= arr[subArrStart++];
    }
  }
  return minLength < Infinity ? minLength : 0;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([1, 2, 3, 10], 99));
console.log(minSubArrayLen([10, 5, 3, 11, 1], 15));
