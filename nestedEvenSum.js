/*
Write a recursive function, nestedEvenSum. REturn the sum of all even numbers in an object which may contain nested objects.
*/

const nestedEvenSum = nest => {
  let sum = 0;
  for (let key in nest) {
    if (nest[key] % 2 === 0) {
      sum += nest[key];
    } else if (typeof nest[key] === "object") {
      sum += nestedEvenSum(nest[key], sum);
    }
  }
  return sum;
};

obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

let obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
};

console.log(nestedEvenSum(obj1));

console.log(nestedEvenSum(obj2));
