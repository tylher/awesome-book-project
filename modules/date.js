import { DateTime } from './luxon.js';

const showDate = () => {
  const date = DateTime.now();
  const textTemplate = document.createElement('p');
  textTemplate.textContent = date;
  const dateHolder = document.querySelector('.date-holder');
  dateHolder.appendChild(textTemplate);
};

export default showDate;