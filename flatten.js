/*
Given an array of arrays, return all elements in a single array. You must use recursion.
*/

const flatten = (arrays, flat = []) => {
  arrays.forEach(elem => {
    if (Array.isArray(elem)) {
      flatten(elem, flat);
    } else {
      flat.push(elem);
    }
  });
  return flat;
};

console.log(flatten([[10], [20, 30], [40]]));
console.log(flatten([1, 2, [3], 4, [5, [6], 7]]));
