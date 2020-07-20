import './navigation.css';

export const navigation = (destination, elements) => {
  navigationListMarkup(elements);
};

export const navigationListMarkup = elements => {
  return `
      <ul class="navigationList">
          ${navigationListItemMarkup(elements)}
      </ul>
      `;
};

export const navigationListItemMarkup = elements => {
  return elements.reduce((acc, element) => {
    acc += `
        <li class="navigationListItem" data-navigationlink="${element}">
          <a href="#">${element}</a>
        </li>`;
    return acc;
  }, '');
};

export default {
  refs: {},
  activeLinks: {},
};

export const setActiveLink = e => {};
