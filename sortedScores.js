/*
Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:

an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

For example:

  const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]
*/

const sortScores = (unsortedScores, highestPossibleScore) => {
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

  unsortedScores.forEach(score => {
    scoreCounts[score]++;
  });

  const sortedScores = [];

  for (
    let currentScore = highestPossibleScore;
    currentScore >= 0;
    currentScore--
  ) {
    let count = scoreCounts[currentScore];
    for (let occurance = 0; occurance < count; occurance++) {
      sortedScores.push(currentScore);
    }
  }

  return sortedScores;
};

let unsortedScores = [37, 89, 41, 65, 91, 53];
let HIGHEST_POSSIBLE_SCORE = 100;

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
