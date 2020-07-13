"use strict";
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

 const randomThemeIsActive = false;

const start() {
  if (this.randomThemeIsActive === true) {
    return;
  }
  this.timerId = setInterval(() => this.addBgColor(), 1000);
},

const stop() {
  if (this.randomThemeIsActive === false) {
    return;
  }
  clearInterval(this.timerId);
  this.randomThemeIsActive = false;
}





refs.start.addEventListener("click", changeStart);
refs.stop.addEventListener("click", changeStop);
