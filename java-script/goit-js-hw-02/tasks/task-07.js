"use strict";

const passwords = ["123", "111", "qwerty", "qazwsx"];
let attempts = 3;
let cancel = 0;

do {
  const userPassword = prompt("Введите пароль");

  if (userPassword === null) {
    alert("Прервано пользователем");
    break;
  } else {
    for (const item of passwords) {
      if (userPassword === item && attempts <= 3) {
        alert("Добро пожаловать!");
        cancel = 1;
        break;
      } else {
        attempts -= 1;
        if (attempts === 0) {
          break;
        }
        alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
        break;
      }
    }
  }

  if (attempts === 0) {
    alert("У вас закончились попытки, аккаунт заблокирован!");
    break;
  }
} while (true);
