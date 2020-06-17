"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число!");

  if (input === null) {
    alert("Отменено пользователем");
    break;
  }
  input = Number(input);
  if (isNaN(input)) {
    alert("введено не чмсло");
    continue;
  }
  numbers.push(input);
} while (true);

for (const number of numbers) {
  total += number;
}
alert(total);
