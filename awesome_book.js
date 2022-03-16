/* eslint-disable array-callback-return */
let Book = [];

if (!localStorage.getItem('books')) {
  localStorage.setItem('books', JSON.stringify(Book));
}

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
    const title = this.bookTitle.value;
    const author = this.bookAuthor.value;
    const book = new BookStore(title, author);
    if (title === '' && author === '') {
      return;
    }
    Book.push(book);
    const storage = JSON.parse(localStorage.getItem('books'));
    storage.push(book);
    const div = document.createElement('div');
    div.classList.add('align-items');
    div.innerHTML = `<div class="flex-division-box"><h4>${book.Title}</h4> <p>${book.author}</p></div><button onclick='bookStore.remove(this)' class='remove-book'>remove</button> `;
    this.displayBooks.appendChild(div);
    localStorage.setItem('books', JSON.stringify(storage));
  }

  /* eslint-disable */
  remove(e) {
    /* eslint-enable */
    this.displayBooks.innerHTML = '';
    Book = Book.filter(
      (book) => book.Title !== e.parentElement.childNodes[0].childNodes[0].textContent,
    );
    localStorage.setItem('books', JSON.stringify(Book));

    /* eslint-disable */
    Book.map((book) => {
      /* eslint-enable */
      const div = document.createElement('div');
      div.classList.add('align-items');
      div.innerHTML = `<div class="flex-division-box"><h4>${book.Title}</h4> <p>${book.author}</p></div> <button onclick='bookStore.remove(this)' class='remove-book'>remove</button> `;
      this.displayBooks.appendChild(div);
    });
  }

  getBooks() {
    Book = JSON.parse(localStorage.getItem('books'));
    // eslint-disable-next-line array-callback-return
    Book.map((item) => {
      const div = document.createElement('div');
      div.classList.add('align-items');
      div.innerHTML = `<div class="flex-division-box"><h4>${item.Title}</h4> <p>${item.author}</p> </div> <button onclick='bookStore.remove(this)' class='remove-book'>remove</button> `;
      this.displayBooks.appendChild(div);
    });
  }
}

const bookStore = new BookStore();

bookStore.add.addEventListener('click', () => bookStore.addBook());

window.addEventListener('load', bookStore.getBooks());
