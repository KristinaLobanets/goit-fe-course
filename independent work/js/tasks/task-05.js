"use strict";

const findAvaregesalary = function (employees) {
  let total = 0;
  let sumNumber = 0;
  const numbers = Object.values(employees);
  for (const number of numbers) {
    sumNumber += number;
  }
  total = sumNumber / numbers.length;

  return total;
};

console.log(
  findAvaregesalary({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findAvaregesalary({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findAvaregesalary({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
