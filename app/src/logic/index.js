//For run the app, uncomment this:
import validateLogic from '../utilities/validate'
import Data from '../data'

//For run the test, uncomment this:
// const validateLogic = require('../utilities/validate')
// const Data = require('../data')

const { Book, Genre, defaultData } = Data

sessionStorage.setItem('books',
JSON.stringify(defaultData.defaultBook))
sessionStorage.setItem('genres',
JSON.stringify(defaultData.defaultGenre))

const logic = {
    _books: JSON.parse(sessionStorage.getItem('books')),
    _genres: JSON.parse(sessionStorage.getItem('genres')),
    
    apiSimulator(){
        //add time delay
    },

    retrieveBooks(){
        return logic._books 
    },

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
        validateLogic([{ key: 'genre', value: genre, type: String }])

        if (genre === 'default') return logic._books
        
        const booksFiltered = logic._books.filter(book => book.genre === genre)

        return booksFiltered
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
    addBook(title, genre, price, author){
        validateLogic([
            { key: 'title', value: title, type: String },
            { key: 'genre', value: genre, type: String },
            { key: 'price', value: price, type: String },
            { key: 'author', value: author, type: String }
        ])

        const allBooks = logic._books

        allBooks.forEach(book => { 
            if (book.title === title) throw Error(`Book ${title} already exist`)
        })

        const book = new Book({ title, genre, price, author })

        allBooks.push(book)

        sessionStorage.setItem('books',
        JSON.stringify(allBooks))
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
    editBook(id, title, genre, price, author){
        validateLogic([
            { key: 'id', value: id, type: Number },
            { key: 'title', value: title, type: String },
            { key: 'genre', value: genre, type: String },
            { key: 'price', value: price, type: String },
            { key: 'author', value: author, type: String }
        ])
        const books = logic._books
        
        books.forEach(book => { 
            if (book.title === title) throw Error (`genre '${title}' already exists`)
        })

        const bookEdited = logic._books.filter(book => book.id === id)

        bookEdited.title = title
        bookEdited.genre = genre
        bookEdited.price = price
        bookEdited.author = author

        const index = books.findIndex(book => book.id === id)
        
        books.splice(index, 1)

        books.push(bookEdited)

        sessionStorage.setItem('books',
        JSON.stringify(books))
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
    deleteBook(id){
        validateLogic([{ key: 'id', value: id, type: Number }])
       
        const books = logic._books

        const deletedBook = books.findIndex(book => book.id === id)
        
        books.splice(deletedBook, 1)

        sessionStorage.setItem('books',
        JSON.stringify(books))
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
    deleteBookForGenre(name){
        validateLogic([{ key: 'name', value: name, type: String }])
       
        const books = logic._books

        const _books = books.filter(book => book.genre === name)
        
        _books.forEach(_book => 
            books.splice(books.findIndex(book => 
                book.genre === _book.genre),1
            )
        )

        sessionStorage.setItem('books',
        JSON.stringify(_books))
    },

    retrieveGenres(){
        return logic._genres
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
    addGenre(name){
        validateLogic([{ key: 'name', value: name, type: String }])

        const genres = logic._genres

        genres.forEach(genre => { 
            if (genre.name === name) throw Error (`genre '${name}' already exists`)
        })

        const _genre = new Genre({ name })

        genres.push(_genre)
        
        sessionStorage.setItem('genres',
        JSON.stringify(genres))
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
    editGenre(id, name){
        validateLogic([
            { key: 'id', value: id, type: Number },
            { key: 'name', value: name, type: String }
        ])

        const genres = logic._genres

        genres.forEach(genre => { 
            if (genre.name === name) throw Error (`genre '${name}' already exists`)
        })
        
        const genreEdited = logic._genres.find(genre => genre.id === id)

        const oldName = genreEdited.name

        genreEdited.name = name

        const index = genres.findIndex(genre => genre.id === id)
        
        genres.splice(index, 1)

        genres.push(genreEdited) //Al hacer push cambia de orden OJO

        const books = logic.retrieveBooks()

        books.forEach(book => { 
            if (book.genre === oldName) {
                book.genre = name
            }
        })

        sessionStorage.setItem('genres',
        JSON.stringify(genres))

        sessionStorage.setItem('books',
        JSON.stringify(books))
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
    deleteGenre(id){
        validateLogic([{ key: 'id', value: id, type: Number }])
       
        const genres = logic._genres

        const deletedGenre = genres.findIndex(genre => genre.id === id)
        
        genres.splice(deletedGenre, 1)

        sessionStorage.setItem('genres',
        JSON.stringify(genres))
    }
}

//For run the app, uncomment this:
export default logic

//For run the test, uncomment this:
// module.exports = logic

