import users from "./module.js";
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = (users) => {
  return users.reduce((akk, user) => akk + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
