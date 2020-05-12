"use strict";

let input;
let total = 0;

while (true) {
  input = prompt("Введите число!");

  input = Number(input);

  total += input;
}

alert(`Общая сумма чисел равна ${total}`);
