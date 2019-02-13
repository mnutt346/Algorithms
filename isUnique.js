// ----- Naive solution -----
// const isUnique = string => {
//   let counter = {};
//   for (let char of string) {
//     if (counter[char]) {
//         return false;
//     } else {
//         counter[char] = true;
//     }
//   }
//   return true;
// };
// O(n) run time ::: O(n) space

const isUnique = string => {
  let sorted = string.split("").sort();
  let pointer1 = 0,
    pointer2 = 1;
  while (pointer2 < sorted.length) {
    if (sorted[pointer1] === sorted[pointer2]) return false;
    pointer1++;
    pointer2++;
  }
  return true;
};

console.log(isUnique("abcdefghijklmnopqrstuvwxyz"));
console.log(isUnique("popcorn"));
console.log(isUnique("barbeque"));
