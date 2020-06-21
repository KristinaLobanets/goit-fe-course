"use strict";

function findSpamWord(string) {
  let message = string.toLowerCase();
  let indexMessage = message.indexOf("spam");
  console.log(indexMessage);
  let total = string.slice(0, indexMessage);
  let newTotal = total + "...";

  return newTotal;
}

console.log(findSpamWord("The quick brown fox jumped spam over the lazy dog")); // 'jumped'

console.log(findSpamWord("Google spam do a roll")); // 'Google'

console.log(findSpamWord("May the force be Spam with you")); // 'force'
