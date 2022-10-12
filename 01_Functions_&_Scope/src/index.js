//Data
const inventory = [
  {
    id: 1,
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marjin Haverbeke',
    price: 10.0,
    reviews: [
      { userID: 1, content: 'Good book, but not great for new coders' },
    ],
    inventory: 10,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
    id: 2,
    title: 'JavaScript & JQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett',
    price: 45.75,
    reviews: [{ userID: 15, content: 'good way to learn JQuery' }],
    inventory: 2,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg',
  },
  {
    id: 3,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    price: 36.0,
    reviews: [
      { userID: 25, content: 'I disagree with everything in this book' },
      { userID: 250, content: 'Only JS book anyone needs' },
    ],
    inventory: 8,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
    id: 4,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    price: 25.5,
    reviews: [
      { userID: 44, content: 'Great intro to js book' },
      { userID: 350, content: 'It really is the Definitive guide' },
    ],
    inventory: 0,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg',
  },
  {
    id: 5,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    price: 6.0,
    reviews: [
      {
        userID: 76,
        content: 'You can find this for free online, no need to pay for it!',
      },
    ],
    inventory: 7,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg',
  },
  {
    id: 6,
    title: 'Learn Enough JavaScript to Be Dangerous',
    author: 'Michael Hartl',
    price: 24.0,
    reviews: [{ userID: 50, content: 'pretty good' }],
    inventory: 5,
    imageUrl:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW',
  },
  {
    id: 7,
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    price: 49.95,
    reviews: [
      {
        userID: 99,
        content:
          'One of the most helpful books for taking on the tech interview',
      },
      {
        userID: 20,
        content: 'Great but I just wish it was in JavaScript instead of Java',
      },
    ],
    inventory: 20,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg',
  },
]

// Function ideas:
/*
- helloWorld
- priceFormatter
- titleAndAuthor
- applyDiscount(price)
- randomDiscount
- generateMarketing(book)
- buildBook(price, author, imageUrl)
*/

// Arrow functions vs regular functions

// Difference between Block scope, Function scope, and Global scope

// Ideas:

function helloWorld() {
  return 'hello world'
}
console.log(helloWorld())

function priceFormatter(price) {
  // return '$' + price.toFixed(2);
  return `$${price.toFixed(2)}`
}

console.log(priceFormatter(3.5))

// function titleAndAuthor(book) {
//   // return book.title +'by'+ book.author;
//   return `${book.title} by ${book.author}`;
// }

const titleAndAuthor = (book) => `${book.title} by ${book.author}`

const applyDiscount = (book, discount) => {
  book.price = book.price - discount
  return book
}

let newTitle = 'Learn JavaScript to Be Dangerous'

function buildBook(price, author, imageUrl) {
  console.log(`Function scope`, newTitle)
  const bookObj = {}
  const defaultImage = 'placeHolderImage.jpg'
  bookObj.price = price
  bookObj.author = author
  if (!imageUrl) {
    bookObj.imageUrl = defaultImage
  } else {
    bookObj.imageUrl = imageUrl
  }
  console.log(`Function scope`, defaultImage)
  return bookObj
}

console.log(buildBook(3.5, 'Gayle Laakmann McDowell'))

function mapOverArray(array, callback) {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    let transformedElement = callback(element)
    newArray.push(transformedElement)
  }
  return newArray
}

console.log(mapOverArray(inventory, titleAndAuthor))

const transformed = inventory.map((book) => {
  console.log(book.title)
  return titleAndAuthor(book)
})

console.log(transformed)
