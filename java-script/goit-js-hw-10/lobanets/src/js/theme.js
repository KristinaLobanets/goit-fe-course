import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export const checkTheme = () => {
  const theme = localStorage.getItem('Theme');

  if (theme === 'dark-theme') {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    refs.switchJs.checked = 'true';
  } else if (theme === 'light-theme') {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
};

export const ThemeFunk = event => {
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
