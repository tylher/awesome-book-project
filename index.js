if (!localStorage.getItem('books')) {
  localStorage.setItem('books', JSON.stringify(Book));
}

const bookStore = new BookStore();

bookStore.addBook();

window.addEventListener('load', bookStore.getBooks());
