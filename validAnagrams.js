function validAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;

  let counter = {};

  for (let char of string1) {
    counter[char] ? (counter[char] += 1) : (counter[char] = 1);
  }

  for (let char of string2) {
    if (!counter[char]) return false;
    else counter[char] -= 1;
  }

  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("car", "rat"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
