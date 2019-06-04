/*
Write a function called reverse which accepts a string and returns a new string in reverse.
*/

const reverse = str => {
  if (str.length === 1) return str;
  return str.slice(str.length - 1) + reverse(str.substring(0, str.length - 1));
};

console.log(reverse("banana"));
console.log(reverse("parabola"));
