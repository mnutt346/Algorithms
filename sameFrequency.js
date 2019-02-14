function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) return false;

  let counter = {};

  for (let num of num1.toString()) {
    counter[num] ? (counter[num] += 1) : (counter[num] = 1);
  }

  for (let num of num2.toString()) {
    if (!counter[num]) return false;
    else counter[num]--;
  }
  return true;
}

console.log(sameFrequency(123, 213));
console.log(sameFrequency(15334, 15324));
