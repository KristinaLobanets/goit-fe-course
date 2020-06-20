"use strict";
// done

const findBestEmployee = function (employees) {
  let name;
  const values = Object.values(employees);
  // console.log(values);
  const maxValues = Math.max(...values);
  // console.log(maxValues);
  const keyEmployees = Object.entries(employees);
  // console.log(keyEmployees);
  for (const oneKey of keyEmployees) {
    // console.log(oneKey);
    if (oneKey[1] === maxValues) {
      name = oneKey[0];
    }
  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
