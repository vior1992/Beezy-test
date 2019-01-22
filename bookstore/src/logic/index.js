//For run the app, uncomment this:
import validateLogic from "../utilities/validate"
import Data from "../data"
import api from '../api'

//For run the test, uncomment this:
// const validateLogic = require("../utilities/validate")
// const Data = require("../data")
// const api = require("../api")

const { Book, Genre } = Data

const logic = {
  /**
   *
   * @returns {Promise.<Array>} -> The books array.
   */
  retrieveBooks: async () => await api.bookStorage.get(),

  /**
   *
   * @param {String} genre -> The name of the genre.
   *
   * @throws {TypeError} -> On not string data.
   * @throws {Error} -> On empty or blank data.
   * @throws {TypeError} -> On not boolean data.
   * @throws {TypeError} -> On not number data.
   *
   * @returns {return} -> The books array with filtered books.
   */
  listBooksFiltered(genre) {
    validateLogic([{ key: "genre", value: genre, type: String }])

    return (async () => {
        const books = await logic.retrieveBooks()

        if (genre === "default") return books

        return books.filter(book => book.genre === genre)
    })()
  },

  /**
   *
   * @param {String} title -> The title of the book.
   * @param {String} genre -> The genre of the book.
   * @param {String} price -> The price of the book.
   * @param {String} author -> The author of the book.
   *
   * @throws {TypeError} -> On not string data.
   * @throws {Error} -> On empty or blank data.
   * @throws {TypeError} -> On not boolean data.
   * @throws {TypeError} -> On not number data.
   *
   */
  addBook(title, genre, price, author) {
    validateLogic([
      { key: "title", value: title, type: String },
      { key: "genre", value: genre, type: String },
      { key: "price", value: price, type: String },
      { key: "author", value: author, type: String }
    ])

    return (async () => {
        const books = await logic.retrieveBooks()

        books.forEach(book => {
        if (book.title === title) throw Error(`Book ${title} already exist`)
        })

        const book = new Book({ title, genre, price, author })

        books.push(book)

        await api.bookStorage.set(books)
    })()
  },

  /**
   *
   * @param {String} oldGenre -> The oldGenre of the book.
   * @param {String} newGenre -> The newGenre of the book.
   *
   * @throws {TypeError} -> On not string data.
   * @throws {Error} -> On empty or blank data.
   * @throws {TypeError} -> On not boolean data.
   * @throws {TypeError} -> On not number data.
   *
   */
editBookGenre(oldGenre, newGenre) {
    validateLogic([
      { key: "oldGenre", value: oldGenre, type: String },
      { key: "newGenre", value: newGenre, type: String }
    ])

    return (async () => {
        const books = await logic.listBooksFiltered(oldGenre)

        books.forEach(async book => {
        const { id, title, price, author } = book
        await logic.editBook(id, title, newGenre, price, author)
        })
    })()
  },

  /**
   *
   * @param {Number} id -> The id of the book.
   * @param {String} title -> The title of the book.
   * @param {String} genre -> The genre of the book.
   * @param {String} price -> The price of the book.
   * @param {String} author -> The author of the book.
   *
   * @throws {TypeError} -> On not string data.
   * @throws {Error} -> On empty or blank data.
   * @throws {TypeError} -> On not boolean data.
   * @throws {TypeError} -> On not number data.
   *
   */
  editBook(id, title, genre, price, author) {
    validateLogic([
      { key: "id", value: id, type: Number },
      { key: "title", value: title, type: String },
      { key: "genre", value: genre, type: String },
      { key: "price", value: price, type: String },
      { key: "author", value: author, type: String }
    ])

    return (async () => {
        const books = await logic.retrieveBooks()

        const index = books.findIndex(book => book.id === id)

        const bookEdited = books[index]

        bookEdited.title = title
        bookEdited.genre = genre
        bookEdited.price = price
        bookEdited.author = author

        books[index] = bookEdited

        await api.bookStorage.set(books)
    })()
  },

  /**
   *
   * @param {Number} id -> The id of the book.
   *
   * @throws {TypeError} -> On not string data.
   * @throws {Error} -> On empty or blank data.
   * @throws {TypeError} -> On not boolean data.
   * @throws {TypeError} -> On not number data.
   *
   */
  deleteBook(id) {
    validateLogic([{ key: "id", value: id, type: Number }])

    return (async () => {
        const books = await logic.retrieveBooks()

        const deletedBook = books.findIndex(book => book.id === id)

        books.splice(deletedBook, 1)

        await api.bookStorage.set(books)
    })()
  },

  /**
   *
   * @param {String} name -> The name of the genre.
   *
   * @throws {TypeError} -> On not string data.
   * @throws {Error} -> On empty or blank data.
   * @throws {TypeError} -> On not boolean data.
   * @throws {TypeError} -> On not number data.
   *
   */
  deleteBookForGenre(name) {
    validateLogic([{ key: "name", value: name, type: String }])

    return (async () => {
        const books = await logic.retrieveBooks()

        const booksWithOutFilteredGenre = books.filter(book => book.genre !== name)

        await api.bookStorage.set(booksWithOutFilteredGenre)
    })()
  },

  /**
   *
   * @returns {Promise.<Array>} -> The genres array.
   */

  retrieveGenres: () => api.genreStorage.get(),

  /**
   *
   * @param {String} name -> The name of the genre.
   *
   * @throws {TypeError} -> On not string data.
   * @throws {Error} -> On empty or blank data.
   * @throws {TypeError} -> On not boolean data.
   * @throws {TypeError} -> On not number data.
   *
   */
  addGenre(name) {
    validateLogic([{ key: "name", value: name, type: String }])

    return (async () => {
        const genres = await logic.retrieveGenres()

        genres.forEach(genre => {
        if (genre.name === name) throw Error(`Genre '${name}' already exists`)
        })

        const genre = new Genre({ name })

        genres.push(genre)

        await api.genreStorage.set(genres)
    })()
  },

  /**
   *
   * @param {Number} id -> The id of the genre.
   * @param {String} name -> The name of the genre.
   *
   * @throws {TypeError} -> On not string data.
   * @throws {Error} -> On empty or blank data.
   * @throws {TypeError} -> On not boolean data.
   * @throws {TypeError} -> On not number data.
   *
   */
  editGenre(id, name) {
    validateLogic([
      { key: "id", value: id, type: Number },
      { key: "name", value: name, type: String }
    ])

    return (async () => {
        const genres = await logic.retrieveGenres()

        genres.forEach(genre => {
        if (genre.name === name) throw Error(`Genre '${name}' already exists`)
        })

        const index = genres.findIndex(genre => genre.id === id)

        const genreEdited = genres[index]

        const { name: oldName } = genreEdited

        genreEdited.name = name

        genres[index] = genreEdited

        await api.genreStorage.set(genres)

        await logic.editBookGenre(oldName, name)
    })()
  },

  /**
   *
   * @param {Number} id -> The id of the genre.
   *
   * @throws {TypeError} -> On not string data.
   * @throws {Error} -> On empty or blank data.
   * @throws {TypeError} -> On not boolean data.
   * @throws {TypeError} -> On not number data.
   *
   */
  deleteGenre(id) {
    validateLogic([{ key: "id", value: id, type: Number }])

    return (async () => {
      const genres = await logic.retrieveGenres()

      const deletedGenre = genres.findIndex(genre => genre.id === id)

      genres.splice(deletedGenre, 1)

      await api.genreStorage.set(genres)
    })()
  }
}

//For run the app, uncomment this:
export default logic

//For run the test, uncomment this:
// module.exports = logic
