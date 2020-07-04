const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

// for (let ingridient of ingredients) {
//   let ingredientOne = document.createElement("li");
//   ingredientOne.textContent = ingridient;
//   ingredientsList.appendChild(ingredientOne);
// }

const libery = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`, "");
ingredientsList.innerHTML = libery;

console.log(ingredientsList);
