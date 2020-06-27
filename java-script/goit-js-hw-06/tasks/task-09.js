import users from "./module.js";

// Массив имен (поле name) людей, отсортированных
//  в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = (users) => {
  const sortFriends = (a, b) => a.friends.length - b.friends.length;
  return users.sort(sortFriends).map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// numbers.sort();
// .map(user => user.name);
// users.sort(users.frends.length);
