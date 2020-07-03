// Напиши скрипт, который реагирует на изменение
// значения input#font-size-control (событие input)
//  и изменяет инлайн-стиль span#text обновляя свойство
//  font-size. В результате при перетаскивании ползунка
//  будет меняться размер текста.

const runner = {
  input: document.getElementById("font-size-control"),
  span: document.getElementById("text"),
};

runner.input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  runner.span.style.fontSize = event.currentTarget.value + "px";
}
