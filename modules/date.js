import { DateTime } from './luxon.js';

const showDate = () => {
  const date = new DateTime();
  const textTemplate = document.createElement('small');
  textTemplate.textContent = date;
  const header = document.getElementsByTagName('header')[0];
  header.innerHTML += textTemplate;
};

export default { showDate };