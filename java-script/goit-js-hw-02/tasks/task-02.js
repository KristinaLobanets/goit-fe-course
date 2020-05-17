"use strict";

const calculateEngravingPrice = function (message, pricePerWord) {
  const stringInArray = message.split(" ");
  const arrayLength = stringInArray.length;
  const result = arrayLength * pricePerWord;
  console.log(result);
  return message;
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
