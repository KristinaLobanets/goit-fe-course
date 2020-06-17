"use strict";

const findLongestWord = function (string) {
  const newString = string.split(" ");
  let bigWord = "";
  for (const word of newString) {
    if (word.length > bigWord.length) {
      bigWord = word;
    }
  }
  return bigWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

// "use strict";

// const findLongestWord = function (string) {
// const newString = string.split(" ");
//   let word = "";
//   for (let i = 0; i < newString.length; i += 1) {
//     if (word.length < newString[i].length) {
//       word = newString[i];
//     }
//   }
//   return word;
