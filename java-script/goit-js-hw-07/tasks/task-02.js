// Задание 2

// В HTML есть пустой список
//  ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.getElementById("ingredients");

const listRef = ingredients.map((ingredient) => {
  const listRef = document.createElement("li");
  listRef.textContent = ingredient;
  return listRef;
});
ingredientsList.append(...listRef);

console.log(ingredientsList);

// Напиши скрипт, который для каждого элемента массива
// ingredients создаст отдельный li, после чего вставит
//  все li за одну операцию в список ul.ingredients.
//   Для создания DOM-узлов используй document.createElement().
