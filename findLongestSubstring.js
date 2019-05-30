// const findLongestSubstring = str => {
//   if (!str.length) return 0;

//   let start = 0,
//     end = 1,
//     longest = 0,
//     subStr = str[start];

//   while (end < str.length) {
//     if (subStr.includes(str[end])) {
//       longest = longest < subStr.length ? subStr.length : longest;
//       start = str.indexOf(str[end], start) + 1;
//       end = start + 1;
//       subStr = str[start];
//     } else {
//       subStr += str[end];
//       longest = longest < subStr.length ? subStr.length : longest;
//       end++;
//     }
//   }
//   return longest;
// };

const findLongestSubstring = str => {
  let start = 0,
    longest = 0,
    tracker = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (tracker[char]) {
      start = Math.max(start, tracker[char]);
    }

    longest = Math.max(longest, i - start + 1);
    tracker[char] = i + 1;
  }
  return longest;
};

console.log(findLongestSubstring(""));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));
