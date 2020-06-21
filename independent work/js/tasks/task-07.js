"use strict";
const calculateEngravingPrice = function (message, priceSymbol) {
  let totalletter = 0;
  let summ = 0;
  let word = message.split(" ");
  for (const oneWord of word) {
    totalletter += oneWord.length;
    // console.log(totalletter);
  }
  summ = totalletter * priceSymbol;
  return summ;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);

// let totalletter = "";
//   let summ = 0;
//   let word = message.split(" ");
//   for (const oneWord of word) {
//     totalletter += oneWord;
//     console.log(totalletter);
//   }
//   summ = totalletter.length * priceSymbol;
//   return summ;
