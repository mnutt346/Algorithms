/*
    A semiprime is the product of two prime numbers. Given a semiprime, write a function that will return an array of both prime numbers that were used to create it. Only small semiprimes will be passed to your function so don’t worry about timing out.
*/

const semiPrime = number => {
  let result = [];
  for (let i = 2; i <= Math.sqrt(number); i++) {
    let quotient = number / i;
    if (Number.isInteger(quotient) && isPrime(quotient) && isPrime(i)) {
      result.push(i, quotient);
      return result;
    }
  }
  return "Number is not semiprime";
};

const isPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

console.log(semiPrime(6));
console.log(semiPrime(9));
console.log(semiPrime(20));
console.log(semiPrime(55));
