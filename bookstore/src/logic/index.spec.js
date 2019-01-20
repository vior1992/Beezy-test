const { expect } = require('chai')
global.sessionStorage = require('sessionstorage')
const logic = require('.')


describe('test logic', () => {
    describe('retrieveBooks', () => {
        it('should succed on correct data(retrieve all books)', async () => {
            const books = await logic.retrieveBooks()

            expect(books).to.be.an('array')
            expect(books.length).to.be.equal(2)
            expect(books[1].title).to.be.equal('javascript')
        })
    })

    describe('listBooksFiltered', () => {
        it('should succed on correct data(retrieve books filtered for genre)', async () => {
            const genre = 'comedia'
            const books = await logic.listBooksFiltered(genre)

            expect(books).to.be.an('array')
            expect(books.length).to.be.equal(1)
            expect(books[0].title).to.be.equal('javascript')
        })

        it('should succed on correct data(retrieve all books on default filter)', async () => {
            const genre = 'default'
            const books = await logic.listBooksFiltered(genre)

            expect(books).to.be.an('array')
            expect(books.length).to.be.equal(2)
            expect(books[0].title).to.be.equal('crepusculo')
        })

        it('should fail on wrong genre (undefined)', () => {
            expect(() => logic.listBooksFiltered(undefined)).to.throw(TypeError, 'undefined is not a string')
        })

        it('should fail on wrong genre (empty or blank)', () => {
            expect(() => logic.listBooksFiltered('    ')).to.throw(Error, 'genre is empty or blank')
        })

        it('should fail on wrong genre (number)', () => {
            expect(() => logic.listBooksFiltered(2)).to.throw(Error, '2 is not a string')
        })

        it('should fail on wrong genre (boolean)', () => {
            expect(() => logic.listBooksFiltered(false)).to.throw(Error, 'false is not a string')
        })
    })

    describe('addBook', () => {
        let title, genre, price, author

        beforeEach(() => {
            title = 'mortadelo'
            genre = 'comedia'
            price = '10'
            author = 'Pablo Ibañez'
        })

        it('should succed on correct data',() => {
            logic.addBook(title, genre, price, author)

            const books = logic.retrieveBooks()

            expect(books).to.be.an('array')
            expect(books.length).to.be.equal(3)
            expect(books[2].title).to.be.equal('mortadelo')
        })

        //Title fail tests
        it('should fail on wrong title (undefined)', () => {
            expect(() => logic.addBook(undefined, genre, price, author)).to.throw(TypeError, 'undefined is not a string')
        })

        it('should fail on wrong title (empty or blank)', () => {
            expect(() => logic.addBook('    ', genre, price, author)).to.throw(Error, 'title is empty or blank')
        })

        it('should fail on wrong title (number)', () => {
            expect(() => logic.addBook(2, genre, price, author)).to.throw(Error, '2 is not a string')
        })

        it('should fail on wrong title (boolean)', () => {
            expect(() => logic.addBook(false, genre, price, author)).to.throw(Error, 'false is not a string')
        })

        //Genre fail tests
        it('should fail on wrong genre (undefined)', () => {
            expect(() => logic.addBook(title, undefined, price, author)).to.throw(TypeError, 'undefined is not a string')
        })

        it('should fail on wrong genre (empty or blank)', () => {
            expect(() => logic.addBook(title, '    ', price, author)).to.throw(Error, 'genre is empty or blank')
        })

        it('should fail on wrong genre (number)', () => {
            expect(() => logic.addBook(title, 2, price, author)).to.throw(Error, '2 is not a string')
        })

        it('should fail on wrong genre (boolean)', () => {
            expect(() => logic.addBook(title, false, price, author)).to.throw(Error, 'false is not a string')
        })

        //Price fail tests
        it('should fail on wrong price (undefined)', () => {
            expect(() => logic.addBook(title, genre, undefined, author)).to.throw(TypeError, 'undefined is not a string')
        })

        it('should fail on wrong price (empty or blank)', () => {
            expect(() => logic.addBook(title, genre, '    ', author)).to.throw(Error, 'price is empty or blank')
        })

        it('should fail on wrong price (number)', () => {
            expect(() => logic.addBook(title, genre, 2, author)).to.throw(Error, '2 is not a string')
        })

        it('should fail on wrong price (boolean)', () => {
            expect(() => logic.addBook(title, genre, false, author)).to.throw(Error, 'false is not a string')
        })

        //Author fail tests
        it('should fail on wrong author (undefined)', () => {
            expect(() => logic.addBook(title, genre, price, undefined)).to.throw(TypeError, 'undefined is not a string')
        })

        it('should fail on wrong author (empty or blank)', () => {
            expect(() => logic.addBook(title, genre, price, '    ')).to.throw(Error, 'author is empty or blank')
        })

        it('should fail on wrong author (number)', () => {
            expect(() => logic.addBook(title, genre, price, 2)).to.throw(Error, '2 is not a string')
        })

        it('should fail on wrong author (boolean)', () => {
            expect(() => logic.addBook(title, genre, price, false)).to.throw(Error, 'false is not a string')
        })
    })

    //ARREGLAR TEST
    false && describe('editBook', () =>{
        let title, genre, price, author

        beforeEach(() => {
            title = 'luna llena'
            genre = 'novela romantica'
            price = '22'
            author = 'federico mercurio'
        })

        it('should succed on correct data', () => {
            const book = logic.retrieveBooks()

            logic.editBook(book[0].id, title, genre, price, author)

            const books = logic.retrieveBooks()

            expect(books[2]).to.be.an('object')
            expect(books[2].title).to.be.equal('luna llena')
            expect(books[2].price).to.be.equal('22')
            expect(books[2].author).to.be.equal('federico mercurio')
        })

        //Id fail tests
        it('should fail on wrong id (undefined)', () => {
            expect(() => logic.addBook(undefined, title, genre, price, author)).to.throw(TypeError, 'undefined is not a number')
        })

        it('should fail on wrong id (empty or blank)', () => {
            expect(() => logic.addBook('    ', title, genre, price, author)).to.throw(Error, 'id is empty or blank')
        })

        it('should fail on wrong id (string)', () => {
            expect(() => logic.addBook('2', title, genre, price, author)).to.throw(Error, '2 is not a number')
        })

        it('should fail on wrong id (boolean)', () => {
            expect(() => logic.addBook(false, title, genre, price, author)).to.throw(Error, 'false is not a number')
        })

        //Title fail tests
        it('should fail on wrong title (undefined)', () => {
            expect(() => logic.addBook(this.book[0].id, undefined, genre, price, author)).to.throw(TypeError, 'undefined is not a string')
        })

        it('should fail on wrong title (empty or blank)', () => {
            expect(() => logic.addBook(this.book[0].id, '    ', genre, price, author)).to.throw(Error, 'title is empty or blank')
        })

        it('should fail on wrong title (number)', () => {
            expect(() => logic.addBook(this.book[0].id, 2, genre, price, author)).to.throw(Error, '2 is not a string')
        })

        it('should fail on wrong title (boolean)', () => {
            expect(() => logic.addBook(this.book[0].id, false, genre, price, author)).to.throw(Error, 'false is not a string')
        })

        //Genre fail tests
        it('should fail on wrong genre (undefined)', () => {
            expect(() => logic.addBook(this.book[0].id, title, undefined, price, author)).to.throw(TypeError, 'undefined is not a string')
        })

        it('should fail on wrong genre (empty or blank)', () => {
            expect(() => logic.addBook(this.book[0].id, title, '    ', price, author)).to.throw(Error, 'genre is empty or blank')
        })

        it('should fail on wrong genre (number)', () => {
            expect(() => logic.addBook(this.book[0].id, title, 2, price, author)).to.throw(Error, '2 is not a string')
        })

        it('should fail on wrong genre (boolean)', () => {
            expect(() => logic.addBook(this.book[0].id, title, false, price, author)).to.throw(Error, 'false is not a string')
        })

        //Price fail tests
        it('should fail on wrong price (undefined)', () => {
            expect(() => logic.addBook(this.book[0].id, title, genre, undefined, author)).to.throw(TypeError, 'undefined is not a string')
        })

        it('should fail on wrong price (empty or blank)', () => {
            expect(() => logic.addBook(this.book[0].id, title, genre, '    ', author)).to.throw(Error, 'price is empty or blank')
        })

        it('should fail on wrong price (number)', () => {
            expect(() => logic.addBook(this.book[0].id, title, genre, 2, author)).to.throw(Error, '2 is not a string')
        })

        it('should fail on wrong price (boolean)', () => {
            expect(() => logic.addBook(this.book[0].id, title, genre, false, author)).to.throw(Error, 'false is not a string')
        })

        //Author fail tests
        it('should fail on wrong author (undefined)', () => {
            expect(() => logic.addBook(this.book[0].id, title, genre, price, undefined)).to.throw(TypeError, 'undefined is not a string')
        })

        it('should fail on wrong author (empty or blank)', () => {
            expect(() => logic.addBook(this.book[0].id, title, genre, price, '    ')).to.throw(Error, 'author is empty or blank')
        })

        it('should fail on wrong author (number)', () => {
            expect(() => logic.addBook(this.book[0].id, title, genre, price, 2)).to.throw(Error, '2 is not a string')
        })

        it('should fail on wrong author (boolean)', () => {
            expect(() => logic.addBook(this.book[0].id, title, genre, price, false)).to.throw(Error, 'false is not a string')
        })
    })
})