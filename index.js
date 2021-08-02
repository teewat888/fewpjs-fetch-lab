function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => {
      renderBooks(json);
      explore(json);
    });
}

function fetchCharacter(chr) {
  fetch(`https://anapioficeandfire.com/api/characters/${chr}`)
    .then((resp) => resp.json())
    .then((json) => {
      console.log(`the ${chr} character is `,json.name);
    });
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function explore(books) {
  console.log("the 5th book is ", books[4].name);
  let totalPages = 0;
  totalPages = books.reduce((total,book) => total+book.numberOfPages, 0);
  console.log("total number of pages ", totalPages);
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
  fetchCharacter(1031);
});
