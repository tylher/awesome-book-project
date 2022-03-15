/* eslint-disable array-callback-return */
let Book = [];

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const displayBooks = document.querySelector('.display-books');
const add = document.querySelector('.add-book');

class Books {
  constructor(Title, author) {
    this.Title = Title;
    this.author = author;
  }
}
if (!localStorage.getItem('books')) {
  localStorage.setItem('books', JSON.stringify(Book));
}

function addBook() {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const book = new Books(title, author);
  if (title === '' && author === '') {
    return;
  }
  Book.push(book);
  const storage = JSON.parse(localStorage.getItem('books'));
  storage.push(book);
  const div = document.createElement('div');
  div.innerHTML = `<h2>${book.Title}</h2> <p>${book.author}</p> <button onclick='remove(this)' class='remove-book'>remove</button> <hr>`;
  displayBooks.appendChild(div);
  localStorage.setItem('books', JSON.stringify(storage));
}

add.addEventListener('click', addBook);

/* eslint-disable */
function remove(e) {
    /* eslint-enable */
  displayBooks.innerHTML = '';
  Book = Book.filter((book) => book.Title !== e.parentElement.childNodes[0].textContent);
  localStorage.setItem('books', JSON.stringify(Book));

  /* eslint-disable */
    Book.map((book) => {
        /* eslint-enable */
    const div = document.createElement('div');
    div.innerHTML = `<h2>${book.Title}</h2> <p>${book.author}</p> <button onclick='remove(this)' class='remove-book'>remove</button> <hr>`;
    displayBooks.appendChild(div);
  });
}

function getBooks() {
  Book = JSON.parse(localStorage.getItem('books'));
  // eslint-disable-next-line array-callback-return
  Book.map((item) => {
    const div = document.createElement('div');
    div.innerHTML = `<h2>${item.Title}</h2> <p>${item.author}</p> <button onclick='remove(this)' class='remove-book'>remove</button> <hr>`;
    displayBooks.appendChild(div);
  });
}

window.addEventListener('load', getBooks());