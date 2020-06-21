"use strict";

const str = "1, 1, 1, 1, 1, -4";
function strToArraySum(obj) {
  let total = 0;
  let allnumber = 0;
  const numbers = obj.split(", ");
  for (let number of numbers) {
    allnumber = Number(number);
    if (allnumber < 0) {
      continue;
    }
    total += allnumber;
  }
  return total;
}

console.log(strToArraySum(str));
