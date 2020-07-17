// =============== import ===================
import 'basiclightbox/dist/basicLightbox.min.css';
import './styles.css';
import { refs } from './js/refs';
import { apiServiseceFunk, resetPage } from './js/apiService';
import gallery from './templates/gallery.hbs';
import { createMurkUp } from './js/markUp';
// import * as basicLightbox from 'basiclightbox';
const basicLightbox = require('basiclightbox');

// ====================search====================

let debounce = require('lodash.debounce');

let input;

const searchFunk = event => {
  resetPage();
  refs.galleryHTML.innerHTML = '';
  input = event.target.value;
  apiServiseceFunk(input)
    .then(res => {
      createMurkUp(res);
    })
    .then(refs.loadMore.classList.add('hdn_btn'))
    .then(refs.scroll.classList.add('scroll_btn'));
};

refs.searchInput.addEventListener('input', debounce(searchFunk, 1000));

// =====================loadMore=======================

const loadMoreBtn = event => {
  apiServiseceFunk(input)
    .then(res => {
      createMurkUp(res);
    })
    .then(() => {
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    });
};

refs.loadMore.addEventListener('click', loadMoreBtn);

// =======================scroll========================

const scrollBtn = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

refs.scroll.addEventListener('click', scrollBtn);

// ==========================================================
// ==========================================================

// ======================modalwindow==========================

const modalWindow = event => {
  if (event.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.image}" width="800" height="600">
`);
    console.dir(event.target);
    instance.show();
  }
};

refs.galleryHTML.addEventListener('click', modalWindow);

// ===============================================================
