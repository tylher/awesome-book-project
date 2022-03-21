export default class BookStore {
  constructor(Title, author) {
    this.Book = [];
    this.Title = Title;
    this.author = author;
    this.bookTitle = document.getElementById('title');
    this.bookAuthor = document.getElementById('author');
    this.displayBooks = document.querySelector('.display-books');
    this.add = document.querySelector('.add-book');
  }

  addBook() {
    this.add.addEventListener('click', (e) => {
      e.preventDefault();
      const title = this.bookTitle.value;
      const author = this.bookAuthor.value;
      const book = new BookStore(title, author);
      if (title.trim() === '' && author.trim() === '') {
        return;
      }
      this.Book.push(book);
      const storage = JSON.parse(localStorage.getItem('books'));
      storage.push(book);
      const div = document.createElement('div');
      div.classList.add('align-items');
      div.innerHTML = `<div class="flex-division-box"><h3>${book.Title}</h3> <p>${book.author}</p></div><button onclick='bookStore.remove(this)' class='remove-book'>remove</button> `;
      this.displayBooks.appendChild(div);
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

  remove(e) {
    this.displayBooks.innerHTML = '';
    this.Book = this.Book.filter(
      (book) => book.Title !== e.parentElement.childNodes[0].childNodes[0].textContent,
    );
    localStorage.setItem('books', JSON.stringify(this.Book));

    this.Book.map((book) => {
      const div = document.createElement('div');
      div.classList.add('align-items');
      div.innerHTML = `<div class="flex-division-box"><h3>${book.Title}</h3> <p>${book.author}</p></div> <button onclick='bookStore.remove(this)' class='remove-book'>remove</button> `;
      this.displayBooks.appendChild(div);
      return '';
    });
  }

  getBooks() {
    this.Book = JSON.parse(localStorage.getItem('books'));
    this.Book.map((item) => {
      const div = document.createElement('div');
      div.classList.add('align-items');
      div.innerHTML = `<div class="flex-division-box"><h3>${item.Title}</h3> <p>${item.author}</p> </div> <button onclick='bookStore.remove(this)' class='remove-book'>remove</button> `;
      this.displayBooks.appendChild(div);
      return '';
    });
  }
}
