"use strict";

const names = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    const number = i + 1;
    console.log(`${number} - ${array[i]}`);
  }
};

logItems(names);
logItems(numbers);
