//For run the app, uncomment this:
import Data from "../data"

//For run the test, uncomment this:
// const Data = require('../data')

const { defaultData } = Data

const genreStorage = {
  _key: "genres",
  _storage: sessionStorage,

  init: genres =>
    genreStorage._storage.setItem(genreStorage._key, JSON.stringify(genres)),

  get: () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(JSON.parse(genreStorage._storage.getItem(genreStorage._key)))
      }, Math.floor(Math.random() * 300) + 50)
    }),

  set: genres =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(
          genreStorage._storage.setItem(
            genreStorage._key,
            JSON.stringify(genres)
          )
        )
      }, Math.floor(Math.random() * 300) + 50)
    })
}

const bookStorage = {
  _key: "books",
  _storage: sessionStorage,

  init: books =>
    bookStorage._storage.setItem(bookStorage._key, JSON.stringify(books)),

  get: () => new Promise(resolve => {
      setTimeout(() => {
        resolve(JSON.parse(bookStorage._storage.getItem(bookStorage._key)))
      }, Math.floor(Math.random() * 300) + 50)
    }),

  set: books => new Promise(resolve => {
      setTimeout(() => {
        resolve(
          bookStorage._storage.setItem(bookStorage._key, JSON.stringify(books))
        )
      }, Math.floor(Math.random() * 300) + 50)
    })
}

const { books, genres } = defaultData

bookStorage.init(books)
genreStorage.init(genres)

//For run the app, uncomment this:
export default {
    bookStorage,
    genreStorage
}

//For run the test, uncomment this:
// module.exports = {
//         bookStorage,
//         genreStorage
// }
