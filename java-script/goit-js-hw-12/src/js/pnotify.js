import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, notice, info, success, error } from '@pnotify/core';

export const pnotifyFunk = () => {
  const myError = error({
    text: 'Введите больше символов',
  });
};
