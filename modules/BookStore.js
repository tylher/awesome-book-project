import Book from './Book.js';

export default class BookStore {
  constructor() {
    this.store = [];
    this.bookTitle = document.getElementById('title');
    this.bookAuthor = document.getElementById('author');
    this.displayBooks = document.querySelector('.display-books');
    this.add = document.querySelector('.add-book');
  }

  buildTemplate(book) {
    const div = document.createElement('div');
    div.classList.add('align-items');
    div.innerHTML = `<div class="flex-division-box"><h3>${book.title}</h3> <p>${book.author}</p></div><button  class='remove-book'>remove</button> `;
    this.displayBooks.appendChild(div);
    this.remove();
  }

  addBook() {
    this.add.addEventListener('click', (e) => {
      e.preventDefault();
      const title = this.bookTitle.value;
      const author = this.bookAuthor.value;
      const book = new Book(title, author);
      if (title.trim() === '' && author.trim() === '') {
        return;
      }
      this.store.push(book);
      const storage = JSON.parse(localStorage.getItem('books'));
      storage.push(book);
      this.buildTemplate(book);
      localStorage.setItem('books', JSON.stringify(storage));
      this.bookAuthor.value = '';
      this.bookTitle.value = '';
      alert('Book added to book library');
      document.querySelector('.main-form').classList.add('hide');
      document.querySelector('.contact-section').classList.add('hide');
      const hideLink = document.querySelector('.main-section');
      hideLink.classList.remove('hide');
      hideLink.classList.add('active');
    });
  }

  remove() {
    const removeBtn = document.querySelectorAll('.remove-book');
    removeBtn.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.displayBooks.innerHTML = '';
        this.store = this.store.filter(
          (item) => item.title
          !== removeBtn[index].parentElement.childNodes[0].childNodes[0].textContent,
        );
        localStorage.setItem('books', JSON.stringify(this.store));

        this.store.map((book) => {
          this.buildTemplate(book);
          return '';
        });
      });
    });
  }

  getBooks() {
    if (!localStorage.getItem('books')) {
      localStorage.setItem('books', JSON.stringify(this.store));
    } else {
      localStorage.setItem('books', JSON.stringify(this.store));
      this.store = JSON.parse(localStorage.getItem('books'));
      this.store.map((item) => {
        this.buildTemplate(item);
        return '';
      });
    }
  }
}
