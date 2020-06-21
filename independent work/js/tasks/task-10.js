"use strict";

function findSpamWord(string) {
  let message = string.toLowerCase();
  let newMessage = message.split(" ");
  let indexMessage = newMessage.indexOf("spam");
  let total = newMessage.slice(0, indexMessage);
  total.push("...");
  let oneTotal = total.join(" ");

  return oneTotal;
}

console.log(findSpamWord("The quick brown fox jumped spam over the lazy dog")); // 'jumped'

console.log(findSpamWord("Google spam do a roll")); // 'Google'

console.log(findSpamWord("May the force be Spam with you")); // 'force'
