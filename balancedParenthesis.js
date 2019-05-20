/*
Given a string, return true if it contains balanced parenthesis ().
*/

const isBalanced = string => {
  if (!string.length) return true;
  let start = 0,
    end = string.length - 1;
  if (string[start] === ")" || string[end] === "(") return false;

  let openCount = 0,
    closedCount = 0;

  for (let i = start; i <= end; i++) {
    if (string[i] === "(") {
      openCount++;
    }
    if (string[i] === ")") {
      closedCount++;
    }
  }
  return openCount === closedCount;
};
