"use strict";

let message;
const formatString = function (string) {
  let lengthString = string.slice(0, 39);

  if (string.length < 40) {
    return lengthString;
  } else {
    return `${lengthString}...`;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique ADAA."
  )
);
