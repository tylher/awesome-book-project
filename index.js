import showDate from './modules/date.js';
import BookStore from './modules/BookStore.js';

const bookStore = new BookStore();

if (!localStorage.getItem('books')) {
  localStorage.setItem('books', JSON.stringify(BookStore.Book));
}

bookStore.addBook();

window.addEventListener('load', () => {
  bookStore.getBooks();
  showDate();
});
