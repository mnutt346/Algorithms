/*
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

const sumOfPrimes = n => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

const isPrime = number => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

console.log(sumOfPrimes(5));
console.log(sumOfPrimes(6));
console.log(sumOfPrimes(104));
console.log(sumOfPrimes(103));
