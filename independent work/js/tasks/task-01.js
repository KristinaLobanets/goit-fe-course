"use strict";

const arr = [
  [1, 2],
  [3, 4],
  ["fgfg", 5],
  [6, 7],
  [8, 9],
];
// const arr1 = [10, 9, "fjgg", 3];
// const arr2 = [100, 101, 102];

function func(arr) {
  let totalArr = 0;
  for (const oneArr of arr) {
    for (const number of oneArr) {
      if (isNaN(number)) {
        continue;
      }
      totalArr += number;
    }
  }

  return totalArr;
}

console.log(func(arr));
// console.log(func(arr1));
// console.log(func(arr2));
