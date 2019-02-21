/*
Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false

"But 'ivicc' isn't a palindrome!"

If you had this thought, read the question again carefully. We're asking if any permutation of the string is a palindrome. 
*/

const permutationPalindrom = word => {
  // create an empty set to store characters that appear an odd number of times
  // iterate through the word, if a character is not in the set (odd), add it.
  // if a character is already in the set (even), remove it.
  // if at the end of the word, there are more than two characters in the set, return false
  // otherwise return true

  let oddChars = new Set();

  for (let char of word) {
    if (oddChars.has(char)) {
      oddChars.delete(char);
    } else {
      oddChars.add(char);
    }
  }

  return oddChars.size <= 1;
};

console.log(permutationPalindrom("racecar"));
console.log(permutationPalindrom("ivicc"));
console.log(permutationPalindrom("labradore"));
