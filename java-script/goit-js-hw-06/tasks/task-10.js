import users from "./module.js";
// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они
//  должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) => {
  const skills = users.reduce((acc, user) => {
    acc.push(...user.skills);
    return acc;
  }, []);

  const sortSkills = skills.filter((item, index) => {
    return skills.indexOf(item) == index;
  });
  return sortSkills.sort();
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
// clients.sort()
