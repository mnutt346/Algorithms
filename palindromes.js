const isPalindrome = str => {
  let noSpaces = str.replace(/\s/g, "").toUpperCase(),
    start = 0,
    end = noSpaces.length - 1;

  while (start < end) {
    if (noSpaces[start] !== noSpaces[end]) return false;
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrome("race car"));
console.log(isPalindrome("banana"));
console.log(isPalindrome("Civic"));
