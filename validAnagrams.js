function validAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;

  let string1Counter = {};
  let string2Counter = {};

  for (let char of string1) {
    string1Counter[char] = (string1Counter[char] || 0) + 1;
  }
  for (let char of string2) {
    string2Counter[char] = (string2Counter[char] || 0) + 1;
  }

  for (let key in string1Counter) {
    if (!(key in string2Counter)) return false;
    if (string1Counter[key] !== string2Counter[key]) return false;
  }

  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("car", "rat"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
