/*
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome.
*/

const isPalindrome = str => {
  if (str.length <= 1) return true;
  return (
    str[0] === str[str.length - 1] &&
    isPalindrome(str.substring(1, str.length - 1))
  );
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("banana"));
console.log(isPalindrome("amanaplanacanalpanama"));
