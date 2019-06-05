/*
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.
*/

const stringifyNumbers = (obj, newObj = {}) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (obj[key] instanceof Object && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

let obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log(stringifyNumbers(obj1));
