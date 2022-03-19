let Book = [];

if (!localStorage.getItem('books')) {
  localStorage.setItem('books', JSON.stringify(Book));
}

const link1 = document.querySelector('.contact');

link1.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.main-section').classList.add('hide');
  document.querySelector('.main-form').classList.add('hide');
  const hideLink = document.querySelector('.contact-section');
  hideLink.classList.remove('hide');
  hideLink.classList.add('active');
});

const link2 = document.querySelector('.add-new');
link2.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.main-section').classList.add('hide');
  document.querySelector('.contact-section').classList.add('hide');
  const hideLink = document.querySelector('.main-form');
  hideLink.classList.remove('hide');
  hideLink.classList.add('active');
});

const link3 = document.querySelector('.list');
link3.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.main-form').classList.add('hide');
  document.querySelector('.contact-section').classList.add('hide');
  const hideLink = document.querySelector('.main-section');
  hideLink.classList.remove('hide');
  hideLink.classList.add('active');
});

class BookStore {
  constructor(Title, author) {
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
      Book.push(book);
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
    Book = Book.filter(
      (book) => book.Title !== e.parentElement.childNodes[0].childNodes[0].textContent,
    );
    localStorage.setItem('books', JSON.stringify(Book));

    Book.map((book) => {
      const div = document.createElement('div');
      div.classList.add('align-items');
      div.innerHTML = `<div class="flex-division-box"><h3>${book.Title}</h3> <p>${book.author}</p></div> <button onclick='bookStore.remove(this)' class='remove-book'>remove</button> `;
      this.displayBooks.appendChild(div);
      return '';
    });
  }

  getBooks() {
    Book = JSON.parse(localStorage.getItem('books'));
    Book.map((item) => {
      const div = document.createElement('div');
      div.classList.add('align-items');
      div.innerHTML = `<div class="flex-division-box"><h3>${item.Title}</h3> <p>${item.author}</p> </div> <button onclick='bookStore.remove(this)' class='remove-book'>remove</button> `;
      this.displayBooks.appendChild(div);
      return '';
    });
  }
}

const bookStore = new BookStore();

bookStore.addBook();

window.addEventListener('load', bookStore.getBooks());
