const multiply = (x, y) => {
  if (y < 0) return -multiply(x, -y);

  let product = 0;
  for (let i = 0; i < y; i++) {
    product += x;
  }
  return product;
};

const divide = (x, y) => {
  if (y === 0) return "NaN";
  if (x === 0 || x < y) return 0;
  if (y === 1) return x;

  let quotient = 0;

  while (x > 0) {
    if (x < y) return quotient;
    else {
      x -= y;
      quotient++;
    }
  }

  return quotient;
};

const modulo = (x, y) => {
  if (y === 0) return "NaN";
  if (x < y) return x;
  if (y === 1) return 0;
  if (x < 0 && y < x) return x;

  return y - divide(x, y);
};

console.log(multiply(5, 4));
console.log(multiply(0, 1));
console.log(multiply(1, 6));
console.log(multiply(-3, -2));
console.log(multiply(4, -2));
