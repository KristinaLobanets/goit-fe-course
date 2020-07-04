const categories = document.querySelector("#categories");
console.log(`В списке ${categories.childElementCount} категории.`);
const item = document.querySelectorAll(".item");
item.forEach((it) =>
  console.log(
    `Категория: ${it.firstElementChild.textContent}  Количество элементов: ${it.lastElementChild.childElementCount}`
  )
);
