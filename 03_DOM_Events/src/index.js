renderHeader()
renderFooter()
bookStore.inventory.forEach(renderBook)

function priceFormatter(price) {
  let formattedPrice = Number(price).toFixed(2)
  return `$${formattedPrice}`
}

// Renders Header
function renderHeader() {
  document.querySelector('h1').textContent = bookStore.name
}
// Renders Footer
function renderFooter() {
  const footerDivs = document.querySelectorAll('footer div')
  footerDivs[0].textContent = bookStore.name
  footerDivs[1].textContent = bookStore.address
  footerDivs[2].textContent = bookStore.hours
}

// function: renderBook(book)
// --------------------------
// accepts a book object as an argument and creates
// an li something like this:
// <li class="list-li">
//   <h3>Eloquent JavaScript</h3>
//   <p>Marjin Haverbeke</p>
//   <p>$10.00</p>
//   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
// </li>
// appends the li to the ul#book-list in the DOM
function renderBook(book) {
  const li = document.createElement('li')
  li.className = 'list-li'

  const h3 = document.createElement('h3')
  h3.textContent = book.title

  const pAuthor = document.createElement('p')
  pAuthor.textContent = book.author

  const pPrice = document.createElement('p')
  pPrice.textContent = `$${book.price}`

  const pStock = document.createElement('p');
  if (book.inventory === 0) {
    pStock.textContent = 'No stock available';
    pStock.style.color = 'gray'
  } else {
    pStock.textContent = 'In Stock';
  }

  const img = document.createElement('img')
  img.src = book.imageUrl
  img.alt = `${book.title} cover`
  const btn = document.createElement('button')
  btn.addEventListener('click', (e) => {
    console.log(e.target)
    e.target.parentElement.remove()
  })

  btn.textContent = 'Delete'

  li.append(h3, pAuthor, pPrice, img, btn)
  document.querySelector('#book-list').append(li)
}

const bookForm = document.getElementById('book-form')
// bookForm.addEventListener('submit', (e) => {
//   e.preventDefault()
//   console.log('book added')
//   renderBook(generateNewBook())
// })

// function generateNewBook() {
//   console.log('generating new book')
//   const newBook = {
//     title: bookForm.title.value,
//     author: bookForm.author.value,
//     price: priceFormatter(bookForm.price.value),
//     imageUrl: bookForm.imageUrl.value,
//   }
//   if (bookForm.title.value === '') {
//     alert('Book Title Missing!')
//     return
//   } else if (bookForm.author.value === '') {
//     alert('Book Author Missing!')
//     return
//   } else if (bookForm.price.value === '') {
//     alert('Book Price Missing!')
//     return
//   } else if (bookForm.imageUrl.value === '') {
//     alert('Book Image Missing!')
//     return
//   } else {
//     return newBook
//   }
// }

bookForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const book = {
    title: e.target.title.value,
    author: e.target.author.value,
    price: parseFloat(e.target.price.value),
    reviews: [],
    inventory: 0,
    imageUrl: e.target.imageUrl.value,

  }
    if (e.target.title.value === '') {
    alert('Book Title Missing!')
    return
  } else if (e.target.author.value === '') {
    alert('Book Author Missing!')
    return
  } else if (e.target.price.value === '') {
    alert('Book Price Missing!')
    return
  } else if (e.target.imageUrl.value === '') {
    alert('Book Image Missing!')
    return
  } else {
    renderBook(book)
    e.target.reset()
  }
})