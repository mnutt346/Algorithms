function averagePair(numbers, target) {
  if (!numbers.length) return false;

  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    let average = (numbers[left] + numbers[right]) / 2;
    if (average === target) return true;
    else if (average < target) left++;
    else right--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 2, 5, 67], 2)); //false
console.log(averagePair([], 5)); //false
