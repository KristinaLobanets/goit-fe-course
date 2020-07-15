import cartTemplete from '../templates/cartTemplete.hbs';
import oneCounrty from '../templates/oneCountry.hbs';
import refs from './refs';
import { pnotifyFunk } from './pnotify';

export let createMarkUp = array => {
  if (array.length > 2 && array.length < 9) {
    const obj = cartTemplete(array);
    refs.countryList.innerHTML = obj;
  } else if (array.length <= 2) {
    const obj = oneCounrty(array);
    refs.countryList.innerHTML = obj;
  } else if (array.length > 10) {
    pnotifyFunk();
    refs.countryList.innerHTML = '';
  }
};
