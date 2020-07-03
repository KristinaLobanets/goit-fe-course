// Напиши скрипт, который бы при потере фокуса на
//  инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в
// его атрибуте data-length.
// Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputForm = document.getElementById("validation-input");
const validation = Number(inputForm.getAttribute("data-length"));

console.log(validation);
console.log(inputForm.value.length);

const check = () => {
  if (inputForm.value.length > validation) {
    inputForm.classList.remove("invalid");
    inputForm.classList.add("valid");
  } else inputForm.classList.add("invalid");
};
inputForm.addEventListener("blur", check);
