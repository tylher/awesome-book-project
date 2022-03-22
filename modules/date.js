import { DateTime } from './luxon.js';

const dateHolder = document.querySelector('.date-holder');
const textTemplate = document.createElement('p');
dateHolder.appendChild(textTemplate);

const ChangeTime = () => {
  const date = DateTime.now();
  textTemplate.textContent = date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

const showDate = () => {
  setInterval(() => {
    ChangeTime();
  }, 1000);
};

export default showDate;