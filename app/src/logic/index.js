//For run the app, uncomment this:
import validateLogic from '../utilities/validate'
import Data from '../data'

//For run the test, uncomment this:
// const validateLogic = require('../utilities/validate')
// const Data = require('../data')

const { Book, Genre, defaultData } = Data

const genreStorage = {
    _key: 'genre',
    _storage: sessionStorage,

    get: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(JSON.parse(genreStorage._storage.getItem(genreStorage._key)))
            }, Math.floor(Math.random() * 300) + 50)
        })
    },

    set: async genres => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(genreStorage._storage.setItem(genreStorage._key, JSON.stringify(genres)))
            }, Math.floor(Math.random() * 300) + 50)
        })
    }
}

const bookStorage = {
    _key: 'books',
    _storage: sessionStorage,

    get: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(JSON.parse(bookStorage._storage.getItem(bookStorage._key)))
            }, Math.floor(Math.random() * 300) + 50)
        })
    },

    set: async books => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(bookStorage._storage.setItem(bookStorage._key, JSON.stringify(books)))
            }, Math.floor(Math.random() * 300) + 50)
        })
    }
}

const { books, genres } = defaultData

bookStorage.set(books)
genreStorage.set(genres)

const logic = {
    /**
     * 
     * @returns {Promise.<Array>} -> The books array.
     */ 
    retrieveBooks: async () => await bookStorage.get(),

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
    async listBooksFiltered(genre) {
        validateLogic([{ key: 'genre', value: genre, type: String }])

        const books = await logic.retrieveBooks()

        if (genre === 'default') return books
        
        return books.filter(book => book.genre === genre)
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
    async addBook(title, genre, price, author){
        validateLogic([
            { key: 'title', value: title, type: String },
            { key: 'genre', value: genre, type: String },
            { key: 'price', value: price, type: String },
            { key: 'author', value: author, type: String }
        ])

        const books = await logic.retrieveBooks()

        books.forEach(book => { 
            if (book.title === title) throw Error(`Book ${title} already exist`)
        })

        const book = new Book({ title, genre, price, author })

        books.push(book)

        await bookStorage.set(books)
    },

    //COMMENTS
    async editBookGenre(oldGenre, newGenre) {
        //validate

        const books = await logic.listBooksFiltered(oldGenre)

        books.forEach(async book => {
            const { id, title, price, author } = book
            await logic.editBook(id, title, newGenre, price, author)
        })
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
    async editBook(id, title, genre, price, author){
        validateLogic([
            { key: 'id', value: id, type: Number },
            { key: 'title', value: title, type: String },
            { key: 'genre', value: genre, type: String },
            { key: 'price', value: price, type: String },
            { key: 'author', value: author, type: String }
        ])
        const books = await logic.retrieveBooks()

        const index = books.findIndex(book => book.id === id)

        const bookEdited = books[index]

        bookEdited.title = title
        bookEdited.genre = genre
        bookEdited.price = price
        bookEdited.author = author
        
        books[index] = bookEdited

        await bookStorage.set(books)
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
    async deleteBook(id){
        validateLogic([{ key: 'id', value: id, type: Number }])
       
        const books = await logic.retrieveBooks()

        const deletedBook = books.findIndex(book => book.id === id)
        
        books.splice(deletedBook, 1)

        await bookStorage.set(books)
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
    async deleteBookForGenre(name){
        validateLogic([{ key: 'name', value: name, type: String }])
       
        const books = await logic.retrieveBooks()

        const booksWithOutFilteredGenre = books
            .filter(book => book.genre !== name)

        await bookStorage.set(booksWithOutFilteredGenre)
    },

    /**
     * 
     * @returns {Promise.<Array>} -> The genres array.
     */ 
    retrieveGenres: async () => await genreStorage.get(),

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
    async addGenre(name){
        validateLogic([{ key: 'name', value: name, type: String }])

        const genres = await logic.retrieveGenres()

        genres.forEach(genre => { 
            if (genre.name === name) throw Error (`add genre genre '${name}' already exists`)
        })

        const genre = new Genre({ name })

        genres.push(genre)
        
        await genreStorage.set(genres)
    },

    /**
     * @param {Number} id -> The id of the genre.
     * @param {String} name -> The name of the genre.
     * 
     * @throws {TypeError} -> On not string data.
     * @throws {Error} -> On empty or blank data.
     * @throws {TypeError} -> On not boolean data.
     * @throws {TypeError} -> On not number data.
     * 
     */
    async editGenre(id, name){
        validateLogic([
            { key: 'id', value: id, type: Number },
            { key: 'name', value: name, type: String }
        ])

        const genres = await logic.retrieveGenres()

        genres.forEach(genre => { 
            if (genre.name === name) throw Error (`edit genre '${name}' already exists`)
        })
        
        const index = genres.findIndex(genre => genre.id === id)

        const genreEdited = genres[index]

        const { name: oldName } = genreEdited

        genreEdited.name = name
        
        genres[index] = genreEdited
        
        await genreStorage.set(genres)

        await logic.editBookGenre(oldName, name)
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
    async deleteGenre(id){
        validateLogic([{ key: 'id', value: id, type: Number }])
       
        const genres = await logic.retrieveGenres()

        const deletedGenre = genres.findIndex(genre => genre.id === id)
        
        genres.splice(deletedGenre, 1)

        await genreStorage.set(genres)
    }
}

//For run the app, uncomment this:
export default logic

//For run the test, uncomment this:
// module.exports = logic