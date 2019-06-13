const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (lefty, righty) => {
  let merged = [];

  while (righty.length) {
    lefty[0] < righty[0]
      ? merged.push(lefty.shift())
      : merged.push(righty.shift());
  }
  return merged.concat(lefty);
};

console.log(mergeSort([4, 1, 3, 2, 5, 1, 9]));
