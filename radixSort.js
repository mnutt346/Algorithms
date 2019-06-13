const getDigit = (num, position) => {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
};

const countDigits = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = arr => {
  let max = countDigits(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    let current = countDigits(arr[i]);
    max = Math.max(max, current);
  }
  return max;
};

const radixSort = nums => {
  let longestNum = mostDigits(nums);

  for (let i = 0; i < longestNum; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      buckets[digit].push(nums[j]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
};

console.log(radixSort([3, 1, 5, 2234, 22, 125]));
