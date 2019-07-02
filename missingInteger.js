/*
Find the smallest positive integer that does not occur in a given sequence.
*/

let solution = A => {
  let lowest = 1,
    sorted = A.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (lowest === sorted[i]) {
      lowest += 1;
    }
  }
  return lowest;
};
