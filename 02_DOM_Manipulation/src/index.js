//BookStore has been moved to data.js
console.log(bookStore)

function priceFormatter(price) {
  // return '$' + price.toFixed(2);
  return `$${price.toFixed(2)}`
}

const h1 = document.querySelector('h1')
h1.innerText = bookStore.name
console.log(h1.textContent)

const renderBook = (book) => {
  const li = document.createElement('li')
  li.className = 'list-li'

  const h3 = document.createElement('h3')
  h3.textContent = book.title

  const pPrice = document.createElement('p')
  pPrice.textContent = priceFormatter(book.price)

  const pAuthor = document.createElement('p')
  pAuthor.textContent = book.author
  
  const img = document.createElement('img')
  img.src = book.imageUrl
  img.alt = `${book.title} cover`

  li.append(h3, pAuthor, pPrice, img)
  const ul = document.getElementById('book-list')
  ul.append(li)
}

// const renderWithInnerHtml = (book) => {
//     const li = document.createElement('li');
//     li.className = 'list-list';

//     li.innerHTML = `
//     <h3>${book.title}</h3>
//     <p>${book.author}</p>
//     <p>${priceFormatter(book.price)}</p>
//     <img src="${book.imageUrl}" alt="${book.title} cover"/>
//     `
// }

bookStore.inventory.forEach(renderBook)
