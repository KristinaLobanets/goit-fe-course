// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input и нажимает
//  кнопку Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число. Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире
// и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const blockInput = document.querySelector(".blockInput");
const block = document.querySelector(".block");
const button = document.querySelector('[data-button="generate"]');

console.log(button);

const generateBlocks = () => {
  const blocks = Number(blockInput.value); //3
  let markup = "";
  let x = 30;
  for (let i = 1; i <= blocks; i += 1) {
    x += 10;
    markup += `<div class="square" style="width: ${x}px; height: ${x}px; border: 1px solid black; backgroundColor: red"></div>`;
  }
  block.innerHTML = markup;
};

button.addEventListener("click", generateBlocks);
blockInput.addEventListener("change", generateBlocks);
