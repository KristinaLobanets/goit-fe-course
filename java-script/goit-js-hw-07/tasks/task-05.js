// Напиши скрипт который, при наборе текста в инпуте
// input#name-input (событие input), подставляет его
// текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector("#name-input");
const nameInput = document.querySelector("#name-output");
const emptyInput = "незнакомец";

input.addEventListener("input", (event) => {
  nameInput.textContent = event.target.value;
  if (input.value === "") {
    nameInput.textContent = "незнакомец";
  }
});
