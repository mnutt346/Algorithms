/*
Write a function that takes in two strings and returns a boolean indicating if one string is one edit away from the other or not.
*/

const oneEditAway = (str1, str2) => {
  let str1Length = str1.length,
    str2Length = str2.length;
  lengthDiff = Math.abs(str1Length - str2Length);

  if (lengthDiff > 1) return false;

  let editCount = 0,
    editStore = {};
  if (str1Length <= str2Length) {
    for (let i = 0; i < str1Length; i++) {
      let char = str1[i];
      if (editStore[char]) {
        editStore[char]++;
      } else {
        editStore[char] = 1;
      }
    }

    for (let i = 0; i < str2Length; i++) {
      let char = str2[i];
      if (!editStore[char]) {
        editCount++;
      }
    }
  } else {
    for (let i = 0; i < str2Length; i++) {
      let char = str2[i];
      if (editStore[char]) {
        editStore[char]++;
      } else {
        editStore[char] = 1;
      }
    }

    for (let i = 0; i < str1Length; i++) {
      let char = str1[i];
      if (!editStore[char]) {
        editCount++;
      }
    }
  }

  return editCount === 1;
};

console.log(oneEditAway("stuff", "stuffies"));
console.log(oneEditAway("abc", "abcd"));
console.log(oneEditAway("abcd", "abc"));
console.log(oneEditAway("pay", "bay"));
console.log(oneEditAway("abecd", "abcd"));
