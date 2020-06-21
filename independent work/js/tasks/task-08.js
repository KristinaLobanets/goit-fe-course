"use strict";

const findLongestWord = function (string) {
  let total;
  let allString = string.split(" ");
  let leng = 0;
  for (const word of allString) {
    if (leng < word.length) {
      leng = word.length;
      total = word;
    }
  }
  return total;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
