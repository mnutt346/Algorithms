function translateRomanNumeral(romanNumeral) {
  if (!romanNumeral.length) return 0;

  const DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let sum = 0;

  let numerals = romanNumeral.split("");

  for (let i = 0; i < numerals.length; i++) {
    let currentNumber = DIGIT_VALUES[numerals[i]],
      nextNumber = DIGIT_VALUES[numerals[i + 1]];
    if (currentNumber === undefined) {
      return "null";
    } else if (currentNumber < nextNumber) {
      sum += nextNumber - currentNumber;
      i++;
    } else {
      sum += currentNumber;
    }
  }

  return sum;
}

console.log(translateRomanNumeral("LX"));
console.log(translateRomanNumeral("IV"));
console.log(translateRomanNumeral("horse"));
console.log(translateRomanNumeral("MCMXV"));
console.log(translateRomanNumeral("MMVIII"));
