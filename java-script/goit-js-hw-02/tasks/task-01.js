"use strict";

const pets = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    const numArgument = i + 1;

    console.log(`${numArgument} - ${array[i]}`);
  }
};

logItems(pets);
logItems(numbers);

//Напиши функцию logItems(array), которая получает массив и использует цикл for,
//который для каждого элемента массива будет выводить в консоль сообщение в формате
//[номер элемента] - [значение элемента].
//Нумерация должна начинаться с 1. К примеру для первого элемента массива
//['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango',
//а для индекса 2 выведет '3 - Ajax'.
