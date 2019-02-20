/* 
I suspect the online poker game I'm playing shuffles cards by doing a single riffle.
A "riffle" is the standard way people shuffle cards by hand.
Here's a rigorous definition of the riffle algorithm:

1. cut the deck into halves half1 and half2
2. grab a random number of cards from the top of half1 (could be 0, must be less than or equal to the number of cards left in half1) and throw them into the shuffledDeck
3. grab a random number of cards from the top of half2 (could be 0, must be less than or equal to the number of cards left in half2) and throw them into the shuffledDeck
4. repeat steps 2-3 until half1 and half2 are empty.

To prove this, let's write a function to tell us if a full deck of cards shuffledDeck is a single riffle of two other halves half1 and half2.

We'll represent a stack of cards as an array of integers in the range 1..521..52 (since there are 5252 distinct cards in a deck).
Why do I care? A single riffle is not a completely random shuffle. If I'm right, I can make more informed bets and get rich and finally prove to my ex that I am not a "loser with an unhealthy cake obsession" (even though it's too late now because she let me go and she's never getting me back).
*/

const singleRiffleShuffle = (half1, half2, shuffledDeck) => {
  let half1Index = 0,
    half2Index = 0,
    half1Max = half1.length - 1,
    half2Max = half2.length - 1;

  for (let card of shuffledDeck) {
    if (half1Index <= half1Max && card === half1[half1Index]) {
      half1Index++;
    } else if (half2Index <= half2Max && card === half2[half2Index]) {
      half2Index++;
    } else {
      return false;
    }
  }
  return true;
};

let half1 = [2, 4, 6, 8],
  half2 = [1, 3, 5, 7],
  shuffledDeck = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(singleRiffleShuffle(half1, half2, shuffledDeck));
