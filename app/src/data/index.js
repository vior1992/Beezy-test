//For run the app, uncomment this:
import bookConstructor from './Book'
import genreConstructor from './Genre'
import _defaultData from './defaultData'

//For run the test, uncomment this:
// const bookConstructor = require('./Book')
// const genreConstructor = require('./Genre')
// const _defaultData = require('./defaultData')

const Book  = bookConstructor
const Genre = genreConstructor
const defaultData = _defaultData

//For run the app, uncomment this:
export default {
    Book,
    Genre,
    defaultData
}

// For run the test, uncomment this:
// module.exports = {
//     Book,
//     Genre,
//     defaultData
// }