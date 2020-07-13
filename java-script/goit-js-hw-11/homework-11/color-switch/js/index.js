const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let changeId = null;

function changeColor() {
  changeId = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
  btnStart.disabled = true;
}
btnStart.addEventListener("click", changeColor);

function stopRandom() {
  clearInterval(changeId);
  btnStart.disabled = false;
}
btnStop.addEventListener("click", stopRandom);
