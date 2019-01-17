//RUN APP
import validateLogic from '../utilities/validate'
import Data from '../data'
import Genres from '../components/Genres'

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

    addBook(title, genre, price, author){
        validateLogic([{ key: 'title', value: title, type: String }])
        validateLogic([{ key: 'genre', value: genre, type: String }])
        validateLogic([{ key: 'price', value: price, type: String }])
        validateLogic([{ key: 'author', value: author, type: String }])

        const allBooks = logic._books

        allBooks.forEach(book => { 
            if (book.title === title) throw Error(`Book ${title} already exist`)
        })

        const book = new Book({ title, genre, price, author })

        allBooks.push(book)

        sessionStorage.setItem('books', allBooks)
    },

    editBook(id, title, genre, price, author){
        validateLogic([{ key: 'id', value: id, type: Date }])
        validateLogic([{ key: 'title', value: title, type: String }])
        validateLogic([{ key: 'genre', value: genre, type: String }])
        validateLogic([{ key: 'price', value: price, type: Number }])
        validateLogic([{ key: 'author', value: author, type: String }])

        // const bookEdited = logic.books.filter(id => books.id === id)

        // bookEdited.title = title
        // bookEdited.genre = genre
        // bookEdited.price = price
        // bookEdited.author = author
    },

    deleteBook(id){
        validateLogic([{ key: 'id', value: id, type: Number }])
       
        const deleteBook = logic._books

        const index = deleteBook.findIndex(book => book.id === id)
        
        return deleteBook.splice(index, 1)
    },

    deleteBookForGenre(name){
        validateLogic([{ key: 'name', value: name, type: String }])
       
        const deleteBook = logic._books

        const index = deleteBook.findIndex(book => book.genre === name)
        
        return deleteBook.splice(index, 1)
    },

    retrieveGenres(){
        return logic._genres
    },

    addGenre(name){
        validateLogic([{ key: 'name', value: name, type: String }])
        const allGenres = logic._genres

        allGenres.forEach(genre => { 
            if (genre.name === name) throw Error (`genre '${name}' already exists`)
        })

        const _genre = new Genre({ name })

        allGenres.push(_genre)
        
        sessionStorage.setItem('genres', allGenres)
    },

    editGenre(id, name){
        validateLogic([{ key: 'id', value: id, type: Date }])
      
        const genreEdited = logic._genres.filter(id => Genres.id === id)

        genreEdited.name = name
    },

    deleteGenre(id){
        validateLogic([{ key: 'id', value: id, type: Number }])
       
        const deleteGenre = logic._genres

        const index = deleteGenre.findIndex(genre => genre.id === id)
        
        return deleteGenre.splice(index, 1)
    },

    listBooksFiltered(genre) {
        validateLogic([{ key: 'genre', value: genre, type: String }])

        const books = logic._books

        if (genre === 'default') return books
        
        const booksFiltered = books.filter(book => book.genre === genre)

        return booksFiltered
    }
}

//RUN
export default logic
//TEST
// module.exports = logic


