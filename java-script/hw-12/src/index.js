import './styles.css';
import '@pnotify/core/dist/PNotify.css';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import cartTemplete from './templates/cartTemplete.hbs';
import oneCounrty from './templates/oneCountry.hbs';
import '@pnotify/core/dist/BrightTheme.css';

import { alert, notice, info, success, error } from '@pnotify/core';

let debounce = require('lodash.debounce');

const getCountry = event => {
  fetchCountries(event.target.value).then(createMarkUp);
};

const createMarkUp = array => {
  if (array.length > 2 && array.length < 9) {
    const obj = cartTemplete(array);
    refs.countryList.innerHTML = obj;
  } else if (array.length <= 2) {
    const obj = oneCounrty(array);
    refs.countryList.innerHTML = obj;
  } else if (array.length > 10) {
    const myError = error({
      text: "I'm an error message.",
    });
  }
};

refs.country.addEventListener('input', debounce(getCountry, 500));
