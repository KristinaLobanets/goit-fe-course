import './styles.css';
import array from './menu.json';
import template from './templates/template.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

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
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    storage.save('Theme', Theme.DARK);
  }
  if (event.target.checked === false) {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    storage.save('Theme', Theme.LIGHT);
  }
};

refs.switchJs.addEventListener('change', ThemeFunk);
