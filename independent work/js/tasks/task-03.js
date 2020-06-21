"use strict";
const products = [
  { name: "lock", allprice: 1300, quantity: 4 },
  { name: "bike", allprice: 2700, quantity: 3 },
  { name: "moto", allprice: 4000, quantity: 7 },
  { name: "hammer", allprice: 1200, quantity: 2 },
];
function getPricePerUnit(arr, name) {
  let totalPrise = 0;

  for (const product of arr) {
    if (name === product.name) {
      totalPrise = Math.round(product.allprice / product.quantity);
    }
  }
  return totalPrise;
}

console.log(getPricePerUnit(products, "bike"));
console.log(getPricePerUnit(products, "moto"));
