const info__health = document.querySelector(".info__health");
const info__happy = document.querySelector(".info__happy");
const info__bank = document.querySelector(".info__bank");
const info__tired = document.querySelector(".info__tired");
const newGame = document.querySelector("#start");
let Timer;

const reduseInfo = () => {
  info__health.innerText = Number(info__health.innerText) - 1;
  info__happy.innerText = Number(info__happy.innerText) - 1;
  info__bank.innerText = Number(info__bank.innerText) - 3;
  info__tired.innerText = Number(info__tired.innerText) - 7;
  Timer = setTimeout(reduseInfo, 1000);
};
newGame.addEventListener("click", reduseInfo);

const stopButton = document.querySelector(".Stop");

const stopFunc = () => {
  clearTimeout(Timer);
};
stopButton.addEventListener("click", stopFunc);

const buttomsSection = document.querySelector(".buttoms-section");
const buttonFunc = (event) => {
  if (event.target == event.currentTarget) {
    return;
  }
  let buttonClick;
  let buttonId = event.target.dataset.id;
  switch (buttonId) {
    case "01":
      info__health.innerText = Number(info__health.innerText) + 10;
      info__happy.innerText = Number(info__happy.innerText) + 10;
      info__tired.innerText = Number(info__tired.innerText) - 10;
      break;

    case "02":
      info__health.innerText = Number(info__health.innerText) + 20;
      info__bank.innerText = Number(info__bank.innerText) - 20;

      break;
    case "03":
      info__health.innerText = Number(info__health.innerText) + 30;
      info__bank.innerText = Number(info__bank.innerText) - 30;

      break;
    case "04":
      info__health.innerText = Number(info__health.innerText) - 10;
      info__happy.innerText = Number(info__happy.innerText) + 10;

      break;
    case "05":
      info__happy.innerText = Number(info__happy.innerText) + 20;
      break;

    case "06":
      info__happy.innerText = Number(info__happy.innerText) + 30;
      info__bank.innerText = Number(info__bank.innerText) - 30;
      break;
    case "07":
      info__bank.innerText = Number(info__bank.innerText) + 30;
      break;
    case "08":
      info__bank.innerText = Number(info__bank.innerText) + 60;
      info__tired.innerText = Number(info__tired.innerText) - 10;
      break;
    case "09":
      info__bank.innerText = Number(info__bank.innerText) + 90;
      break;
    case "10":
      info__health.innerText = Number(info__health.innerText) + 10;
      info__tired.innerText = Number(info__tired.innerText) + 20;
      break;
    case "11":
      info__happy.innerText = Number(info__happy.innerText) + 10;
      info__tired.innerText = Number(info__tired.innerText) + 30;
      break;
    case "12":
      info__tired.innerText = Number(info__tired.innerText) + 60;
      break;
    default:
      console.log("Invalid subscription type");
  }
};
buttomsSection.addEventListener("click", buttonFunc);
