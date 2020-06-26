import users from "./module.js";
const getUserNames = (users) => {
  const userName = users.map((user) => user.name);
  return userName;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony'
