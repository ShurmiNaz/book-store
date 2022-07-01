// spinner function 
const toggleSpinner = displayStyle => {
     document.getElementById('toggle-spinner').style.display = displayStyle;
}

const toggleSearchResult = displayStyle => {
     document.getElementById('books').style.display = displayStyle;
}
const searchBooks = () => {
     const searchField = document.getElementById('search-book-text');
     const searchText = searchField.value;
     toggleSpinner('block');
     toggleSearchResult('none');
     searchField.value = '';
     const url = ` https://openlibrary.org/search.json?q=${searchText}`
     fetch(url)
          .then(res => res.json())
          .then(data => displayBooks(data.docs))
};
const displayBooks = books => {
     const number = books.length;
     console.log(number);
     const booksLength = document.getElementById('books-length');
     const displayCard = document.getElementById('display-card');
     displayCard.textContent = "";
     books.forEach(book => {
          const div = document.createElement('div');
          div.classList.add('col');
          div.innerHTML = `
               <div class="card h-100">
                <img src=" https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i : 'picture is not found.'}-M.jpg" class="card-img-top img-fluid img-thumbnail" alt="book photo">
               <div class="card-body">
                    <h6 class="card-title">${book.title}</h6>
                    <h6 class="card-title">Author : ${book.author_name}</h6>
                    <p class="card-title">Publish Date : ${book.first_publish_year ? book.first_publish_year : ' not found'}</p>
                     
               </div>
          </div>

               `;
          displayCard.appendChild(div);

     });
     toggleSpinner('none');
     toggleSearchResult('block');


}
