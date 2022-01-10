function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  class Character {
    constructor(name, age, pronouns) {
      this.name = name
      this.age = age
      this.pronouns = pronouns
    }
  }
  return new Character(name, age, pronouns)
}

function saveReview(review, reviews) {
  return reviews.includes(review) ? reviews : reviews.push(review)
}

function calculatePageCount(bookTitle) {
  let letters = bookTitle.split("")
  return letters.length * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
  class Book {
    constructor(title, mainCharacter, pageCount, genre) {
      this.title = title
      this.mainCharacter = mainCharacter
      this.pageCount = pageCount
      this.genre = genre
    }
  }
  return new Book(bookTitle, bookCharacter, calculatePageCount(bookTitle), genre)
}

function editBook(book) {
  book.pageCount = Math.floor(book.pageCount * .75)
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}