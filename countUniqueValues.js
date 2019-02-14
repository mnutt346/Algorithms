function countUniqueValues(numbers) {
  if (numbers.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < numbers.length; j++) {
    if (numbers[i] !== numbers[j]) {
      i++;
      numbers[i] = numbers[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
