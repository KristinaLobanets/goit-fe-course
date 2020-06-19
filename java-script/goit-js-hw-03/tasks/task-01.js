"use strict";
// done

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";

// console.log(user);

user.hobby = "skydiving";

// console.log(user);

user.premium = false;

// console.log(user);

const values = Object.keys(user);
for (const value of values) {
  console.log(`${value} : ${user[value]}`);
}
