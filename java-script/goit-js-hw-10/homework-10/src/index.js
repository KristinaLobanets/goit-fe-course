import './styles.css';
import array from './menu.json';
import template from './templates/template.hbs';

const refs = {
  menuUl: document.querySelector('.js-menu'),
  switchJs: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const markUp = () => {
  const menuLi = array.reduce((acc, item) => acc + template(item), '');
  refs.menuUl.insertAdjacentHTML('beforeend', menuLi);
};
markUp();

const ThemeFunk = event => {
  if (event.target.checked === true) {
    refs.body.classList.add('dark-theme');
    refs.body.classList.remove('light-theme');
  }
  if (event.target.checked === false) {
    refs.body.classList.add('light-theme');
    refs.body.classList.remove('dark-theme');
  }
};

refs.switchJs.addEventListener('change', ThemeFunk);
