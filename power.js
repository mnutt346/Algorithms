/*
Write a function called power which accepts a base and an exponent. The function should retrun the power of the base to the exponent. Do not worry about negative bases or exponents.
*/

const power = (base, exponent) => {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
};

console.log(power(2, 2));
console.log(power(2, 3));
console.log(power(5, 4));
