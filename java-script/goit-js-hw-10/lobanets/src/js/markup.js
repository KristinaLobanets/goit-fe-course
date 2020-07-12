import refs from './refs';
import template from '../templates/template.hbs';

export const markUp = ar => {
  const menuLi = ar.reduce((acc, item) => acc + template(item), '');
  refs.menuUl.insertAdjacentHTML('beforeend', menuLi);
};
