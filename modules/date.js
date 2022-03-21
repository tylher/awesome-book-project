import { DateTime } from './luxon.js';

const showDate = () => {
  const date = DateTime.now();
  const textTemplate = document.createElement('small');
  textTemplate.textContent = date;
  const header = document.getElementsByTagName('header')[0];
  header.appendChild(textTemplate);
};

export default showDate;