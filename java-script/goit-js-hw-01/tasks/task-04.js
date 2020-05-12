"use strict";

const credits = 23580;
const pricePerDroid = 3000;

const userRequest = prompt("Сколько дроидов хотите купить");
const totalPrice = Number(userRequest) * pricePerDroid;
const restCredits = credits - totalPrice;

let message;

if (userRequest === null) {
  message = "Отменено пользователем!";
} else if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
} else {
  message = `Вы купили ${userRequest} дроидов, на счету осталось ${restCredits} кредитов.`;
}

console.log(message);

alert(message);
