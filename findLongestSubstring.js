const findLongestSubstring = str => {
  if (!str.length) return 0;

  let start = 0,
    end = 1,
    longest = 0,
    subStr = str[start];

  while (end < str.length) {
    if (subStr.includes(str[end])) {
      longest = longest < subStr.length ? subStr.length : longest;
      start = str.indexOf(str[end], start) + 1;
      end = start + 1;
      subStr = str[start];
    } else {
      subStr += str[end];
      longest = longest < subStr.length ? subStr.length : longest;
      end++;
    }
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
