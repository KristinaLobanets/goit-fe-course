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

const theme = localStorage.getItem('Theme');

if (theme === 'dark-theme') {
  refs.body.classList.add(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);
  refs.switchJs.checked = 'true';
} else if (theme === 'light-theme') {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
}

const ThemeFunk = event => {
  if (event.target.checked === true) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
  }
  if (event.target.checked === false) {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
};

refs.switchJs.addEventListener('change', ThemeFunk);
