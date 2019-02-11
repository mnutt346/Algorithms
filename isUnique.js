// Naive solution
const isUnique = string => {
  let counter = {};
  for (let char of string) {
    counter[char] ? false : (counter[char] = true);
  }
  return true;
};

isUnique("banana");
