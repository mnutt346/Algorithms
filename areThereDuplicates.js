function areThereDuplicates(...args) {
  if (!args.length) return false;

  let sorted = args.sort();

  let i = 0;
  for (let j = 1; j < sorted.length; j++) {
    if (sorted[i] === sorted[j]) return true;
    else i = j;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4)); //false
console.log(areThereDuplicates(1, 2, 3, 4, 4)); //true
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
console.log(areThereDuplicates(4, 5, 2, 1, 10, 22, 12, 10, 10));
