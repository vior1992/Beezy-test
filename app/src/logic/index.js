//RUN APP
import validateLogic from '../utilities/validate'
import Book from '../data'
import Genre from '../data'
import Data from '../data'

// import {
//     Book,
//     Genre,
//     Data
// } from '../data'

sessionStorage.setItem('books', JSON.stringify(Data.defaultData.defaultBook))
sessionStorage.setItem('genres', JSON.stringify(Data.defaultData.defaultGenre))

const logic = {
    _books: sessionStorage.getItem('books'),
    _genres: sessionStorage.getItem('genres'),
    
    apiSimulator(){
        //add time delay
    },

    retrieveBooks(){
        return logic._books 
    },

    addBook(title, genre, price, author){
        validateLogic([{ key: 'title', value: title, type: String }])
        validateLogic([{ key: 'genre', value: genre, type: String }])
        validateLogic([{ key: 'price', value: price, type: Number }])
        validateLogic([{ key: 'author', value: author, type: String }])

        const allBooks = logic._books

        allBooks.forEach(book => { 
            if (book.title === title) throw Error ('Book title is in use')
        })

        const book = new Book({ title, genre, price, author })

        allBooks.push(book)

        sessionStorage.setItem('books', allBooks)
    },

    editBook(){

    },

    deleteBook(){

    },

    retrieveGenres(){
        return logic._genres
    },

    addGenre(name){
        validateLogic([{ key: 'name', value: name, type: String }])

        const allGenres = logic._genres

        allGenres.forEach(genre => { 
            if (genre.name === name) throw Error ('Book title is in use')
        })

        const _genre = new Genre({ name })

        allGenres.push(_genre)

        sessionStorage.setItem('genres', allGenres)
    },

    editGenre(){

    },

    deleteGenre(){

    },

    listBooksFiltered(genre) {
        validateLogic([{ key: 'genre', value: genre, type: String }])

        const books = logic._books
        const booksFiltered = books.forEach(book => { return book.genre === genre })

        return booksFiltered
    }
}

//RUN
export default logic
//TEST
// module.exports = logic


