import showDate from './modules/date.js';
import BookStore from './modules/BookStore.js';
import singlePage from './modules/navigation.js';

const bookStore = new BookStore();

bookStore.addBook();
bookStore.getBooks();
singlePage();
showDate();
