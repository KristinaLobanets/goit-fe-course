"use strict";

let country;
let price;

const userAnswer = prompt("Введите страну для доставки товара");

if (userAnswer === null) {
  console.log("Отменено пользователем");
} else {
  const userChoice = userAnswer.toLowerCase();
  switch (userChoice) {
    case "китай":
      country = "Китай";
      price = 100;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case "чили":
      country = "Чили";
      price = 250;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case "австралия":
      country = "Австралия";
      price = 170;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case "индия":
      country = "Индия";
      price = 80;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case "ямайка":
      country = "Ямайка";
      price = 120;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
