/*
Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. 

const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'

*/

const reverseWords = message => {
  //reverse entire message;
  reverseString(message, 0, message.length - 1);

  //reverse each word;
  let currentWordStart = 0;
  for (let i = 0; i < message.length; i++) {
    if (i === message.length || message[i] === " ") {
      reverseString(message, currentWordStart, i - 1);
      currentWordStart = i + 1;
    }
  }
  console.log(message);
};

const reverseString = (word, left, right) => {
  while (left < right) {
    [word[left], word[right]] = [word[right], word[left]];
    left++;
    right--;
  }
};

reverseWords([
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l"
]);
