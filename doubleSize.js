const doubleSize = (a, b) => {
  let max = b,
    sorted = a.sort((elem1, elem2) => elem1 - elem2);
  for (let i = 0; i < a.length; i++) {
    if (max === a[i]) max *= 2;
  }
  return max;
};

console.log(doubleSize([2, 5, 4, 6, 8], 2));
console.log(doubleSize([4, 2, 16, 8, 32], 2));
