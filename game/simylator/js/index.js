const info__health = document.querySelector(".info__health");
const newGame = document.querySelector("#start");
let Timer;

const reduseInfo = () => {
  info__health.innerText = Number(info__health.innerText) - 1;
  Timer = setTimeout(reduseInfo, 1000);
};
newGame.addEventListener("click", reduseInfo);

const stopButton = document.querySelector(".Stop");

const stopFunc = () => {
  clearTimeout(Timer);
};
stopButton.addEventListener("click", stopFunc);

const park = document.querySelector("#park");

const parkFunc = () => {
  info__health.innerText = Number(info__health.innerText) + 10;
};
park.addEventListener("click", parkFunc);

// const info__health = document.querySelector(".info__health");
// console.dir(info__health);
// const start = document.querySelector(".start");
// add_info.addEventListener("click", addInfo);

// const info = document.querySelector(".info");
// const add_info = document.querySelector(".add_info");

// start.addEventListener("click", reduceInfo);
// console.dir(info.innerText);
// function reduceInfo() {
//   info.innerText = Number(info.innerText) - 5;
//   setTimeout(reduceInfo, 1000);
// }

// function addInfo() {
//   info.innerText = Number(info.innerText) + 100;
