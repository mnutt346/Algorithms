const iterativeFib = n => {
  let num1 = 1,
    num2 = 0;

  while (n > 0) {
    [num1, num2] = [num1 + num2, num1];
    n--;
  }
  return num2;
};

console.log(iterativeFib(1));
console.log(iterativeFib(2));
console.log(iterativeFib(3));
console.log(iterativeFib(7));
