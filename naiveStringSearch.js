const naiveStringSearch = (str, target) => {
  let matchCount = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (str[i + j] !== target[j]) break;
      if (j === target.length - 1) matchCount++;
    }
  }

  return matchCount;
};

console.log(naiveStringSearch("blahblahahablah", "haha"));
console.log(naiveStringSearch("how many dogs is too many dogs", "dog"));
console.log(naiveStringSearch("there is no match", "banana"));
console.log(naiveStringSearch("blah blah blah blah blah blahblah", "blah"));
