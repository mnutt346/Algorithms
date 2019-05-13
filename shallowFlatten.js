/*
Given an array of arrays, return all elements in a single array. Nested arrays will be at most one level deep
*/

const flatten = array => {
  let flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      array[i].forEach(elem => flat.push(elem));
    } else {
      flat.push(array[i]);
    }
  }
  return flat;
};

/*
  const flatten = (array) => {
    return array.flat();
  }
  
  */
