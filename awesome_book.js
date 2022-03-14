let Book = [];

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const displayBooks = document.querySelector('.display-books');
const add = document.querySelector('.add-book');



class books {
    constructor(Title, author) {
        this.Title = Title
        this.author = author
    }
}

function addBook() {
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let book = new books(title, author);
    Book.push(book);
    console.log(Book)
    let div = document.createElement('div');
    div.innerHTML = `<h2>${book.Title}</h2> <p>${book.author}</p> <button onclick='remove(this)' class='remove-book'>remove</button> <hr>`
    displayBooks.appendChild(div);
    author = "";
    title = "";
}

add.addEventListener('click', addBook);


function remove(e) {
    displayBooks.innerHTML = ""
    console.log(e.parentElement.childNodes);
    Book = Book.filter(book => book.Title != e.parentElement.childNodes[0].textContent);
    console.log(Book);


    Book.map(book => {
        let div = document.createElement('div');
        div.innerHTML = `<h2>${book.Title}</h2> <p>${book.author}</p> <button onclick='remove(this)' class='remove-book'>remove</button> <hr>`
        displayBooks.appendChild(div);
    })
}


let formData = {
    title: '',
    author: '',
  };

  if (localStorage.getItem('formData') !== null) {
    const data = localStorage.getItem('formData');
    formData = JSON.parse(data);
  }

const formElements = document.querySelectorAll('input, textarea');
formElements.forEach((element) => {
  element.value = formData[element.name];
  element.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});
