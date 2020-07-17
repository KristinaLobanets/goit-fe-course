import { refs } from './refs';
import gallery from '../templates/gallery.hbs';

export const createMurkUp = array => {
  const newImage = gallery(array);
  // refs.galleryHTML.innerHTML = newImage;
  refs.galleryHTML.insertAdjacentHTML('beforeend', newImage);
};
