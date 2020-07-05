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

const number = document.querySelector("[type=number]");
const render = document.querySelector("[data-action=render]");
const destroy = document.querySelector("[data-action=destroy]");
const boxes = document.querySelector("#boxes");

let input;

let createInput = (event) => {
  input = number.value;
  let width = 30;
  let height = 30;
  for (let i = 0; i < input; i++) {
    newDiv = document.createElement("div");
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    let colorBox =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    newDiv.style.backgroundColor = colorBox;
    boxes.appendChild(newDiv);
    width += 10;
    height += 10;
  }
};

render.addEventListener("click", createInput);

const deleteInput = (event) => {
  boxes.innerHTML = "";
};
destroy.addEventListener("click", deleteInput);
