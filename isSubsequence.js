function isSubsequence(string1, string2) {
  // if string1 is longer than string2 => return false
  // pointer at beginning of string1 and pointer at beginning of string2
  // count how many matches are found, initialize to 0
  // for each letter in string2
  // if match counter = length of string1 => return true;
  // else if string1 @ pointer1 = string2 @ pointer2 => increment match counter
  // else continue
  // default to false

  if (string1.length > string2.length) return false;
  string1 = string1.split("");
  string2 = string2.split("");
  let pointer = 0;
  let matchCounter = 0;
  for (let i = 0; i < string2.length; i++) {
    if (string1[pointer] === string2[i]) {
      matchCounter++;
      pointer++;
    }
  }
  if (matchCounter === string1.length) return true;
  else return false;
}

console.log(isSubsequence("sing", "sting"));
