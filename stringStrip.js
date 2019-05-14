const strip = (str, character) => {
  let start = 0,
    end = str.length - 1,
    string = str.split("");

  const removeFront = arr => {
    arr.shift();
  };

  const removeEnd = arr => {
    arr.pop();
  };

  if (character) {
    while (string[start] === character) {
      removeFront(string);
      end = string.length - 1;
    }
    while (string[end] === character) {
      removeEnd(string);
      end = string.length - 1;
    }
  } else {
    while (string[start] === " ") {
      removeFront(string);
      end = string.length - 1;
    }
    while (string[end] === " ") {
      removeEnd(string);
      end = string.length - 1;
    }
  }

  return string.join("");
};
