/*
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a type of string.
*/

const collectStrings = (obj, strings = []) => {
  for (let key in obj) {
    typeof obj[key] === "string"
      ? strings.push(obj[key])
      : collectStrings(obj[key], strings);
  }
  return strings;
};

const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

console.log(collectStrings(obj1));
