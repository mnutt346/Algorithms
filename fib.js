/*
Write a recursive funciton called fib which accepts a number, n, and returns the nth number in the Fibonacci sequence.
*/

const fib = n => {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
