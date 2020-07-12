import './styles.css';
import array from './menu.json';
// import template from './templates/template.hbs';
import refs from './js/refs.js';
import { markUp } from './js/markup.js';
import { ThemeFunk } from './js/theme.js';
import { checkTheme } from './js/theme.js';
import { addToCard } from './js/card.js';
import { cartModal } from './js/modal.js';
import 'basiclightbox/dist/basicLightbox.min.css';
import { cart } from './js/card.js';
import { removeDish } from './js/modal.js';

markUp(array);
checkTheme();
refs.switchJs.addEventListener('change', ThemeFunk);

const addToOrder = event => {
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.dataset.btn === 'cardButton'
  ) {
    let dish = array.find(item => item.id === event.target.dataset.id);

    addToCard(dish);
  }
};

refs.menuUl.addEventListener('click', addToOrder);

refs.cart.addEventListener('click', cartModal);
