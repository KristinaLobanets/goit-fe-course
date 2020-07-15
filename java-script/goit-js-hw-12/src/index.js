import './styles.css';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import { createMarkUp } from './js/markUp';

let debounce = require('lodash.debounce');

const getCountry = event => {
  fetchCountries(event.target.value).then(createMarkUp);
};

refs.country.addEventListener('input', debounce(getCountry, 500));
