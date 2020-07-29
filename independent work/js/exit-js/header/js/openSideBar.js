import refs from "./refs.js";

const OpenSideBar = (event) => {
  refs.sidebar.classList.remove("ishidden");
};
const CloseModal = (event) => {
  refs.sidebar.classList.add("ishidden");
};

refs.close_btn.addEventListener("click", CloseModal);
refs.burgerButton[0].addEventListener("click", OpenSideBar);
refs.burgerButton[1].addEventListener("click", OpenSideBar);
