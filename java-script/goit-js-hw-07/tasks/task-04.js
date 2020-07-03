// Счетчик состоит из спана и кнопок, которые
//  должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет
// хранится текущее значение счетчика.
// Создай функции increment и decrement для
//  увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы
// функций и обновление интерфейса

const buttonIncrement = document.querySelector("[data-action='increment']");
const buttonDecrement = document.querySelector("[data-action='decrement']");

const buttonContainer = document.querySelector(`#counter `);

const result = document.getElementById(`value`);

let value = 0;

const increment = () => {
  value += 1;
  result.textContent = value;
};

const decrement = () => {
  value -= 1;
  result.textContent = value;
};

buttonIncrement.addEventListener(`click`, increment);
buttonDecrement.addEventListener(`click`, decrement);
