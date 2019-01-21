const { expect } = require("chai")
global.sessionStorage = require("sessionstorage")
const logic = require(".")

describe("test logic", () => {
  
    describe("retrieveBooks", () => {
      it("should succed on correct data(retrieve all books)", async () => {
        const books = await logic.retrieveBooks()

        expect(books).to.be.an("array")
        expect(books.length).to.be.equal(3)
        expect(books[1].title).to.be.equal("The Brothers Karamazov")
      })
    })

  
     describe("listBooksFiltered", () => {
      it("should succed on correct data(retrieve books filtered for genre)", async () => {
        const genre = "novel"
        const books = await logic.listBooksFiltered(genre)

        expect(books).to.be.an("array")
        expect(books.length).to.be.equal(1)
        expect(books[0].title).to.be.equal("The Brothers Karamazov")
      })

      it("should succed on correct data(retrieve all books on default filter)", async () => {
        const genre = "default"
        const books = await logic.listBooksFiltered(genre)

        expect(books).to.be.an("array")
        expect(books.length).to.be.equal(3)
        expect(books[0].title).to.be.equal("Don Quixote")
      })

      it("should fail on wrong genre (undefined)", () => {
        expect(() => logic.listBooksFiltered(undefined)).to.throw(
          TypeError,
          "undefined is not a string"
        )
      })

      it("should fail on wrong genre (empty or blank)", () => {
        expect(() => logic.listBooksFiltered("    ")).to.throw(
          Error,
          "genre is empty or blank"
        )
      })

      it("should fail on wrong genre (number)", () => {
        expect(() => logic.listBooksFiltered(2)).to.throw(
          Error,
          "2 is not a string"
        )
      })

      it("should fail on wrong genre (boolean)", () => {
        expect(() => logic.listBooksFiltered(false)).to.throw(
          Error,
          "false is not a string"
        )
      })
    })

  
     describe("addBook", () => {
      let title, genre, price, author

      beforeEach(() => {
        title = "mortadelo"
        genre = "comedia"
        price = "10"
        author = "Pablo Ibañez"
      })

      it("should succed on correct data", async () => {
        await logic.addBook(title, genre, price, author)

        const books = await logic.retrieveBooks()

        expect(books).to.be.an("array")
        expect(books.length).to.be.equal(4)
        expect(books[3].title).to.be.equal("mortadelo")
      })

      //Title fail tests
      it("should fail on wrong title (undefined)", () => {
        expect(() => logic.addBook(undefined, genre, price, author)).to.throw(
          TypeError,
          "undefined is not a string"
        )
      })

      it("should fail on wrong title (empty or blank)", () => {
        expect(() => logic.addBook("    ", genre, price, author)).to.throw(
          Error,
          "title is empty or blank"
        )
      })

      it("should fail on wrong title (number)", () => {
        expect(() => logic.addBook(2, genre, price, author)).to.throw(
          Error,
          "2 is not a string"
        )
      })

      it("should fail on wrong title (boolean)", () => {
        expect(() => logic.addBook(false, genre, price, author)).to.throw(
          Error,
          "false is not a string"
        )
      })

      //Genre fail tests
      it("should fail on wrong genre (undefined)", () => {
        expect(() => logic.addBook(title, undefined, price, author)).to.throw(
          TypeError,
          "undefined is not a string"
        )
      })

      it("should fail on wrong genre (empty or blank)", () => {
        expect(() => logic.addBook(title, "    ", price, author)).to.throw(
          Error,
          "genre is empty or blank"
        )
      })

      it("should fail on wrong genre (number)", () => {
        expect(() => logic.addBook(title, 2, price, author)).to.throw(
          Error,
          "2 is not a string"
        )
      })

      it("should fail on wrong genre (boolean)", () => {
        expect(() => logic.addBook(title, false, price, author)).to.throw(
          Error,
          "false is not a string"
        )
      })

      //Price fail tests
      it("should fail on wrong price (undefined)", () => {
        expect(() => logic.addBook(title, genre, undefined, author)).to.throw(
          TypeError,
          "undefined is not a string"
        )
      })

      it("should fail on wrong price (empty or blank)", () => {
        expect(() => logic.addBook(title, genre, "    ", author)).to.throw(
          Error,
          "price is empty or blank"
        )
      })

      it("should fail on wrong price (number)", () => {
        expect(() => logic.addBook(title, genre, 2, author)).to.throw(
          Error,
          "2 is not a string"
        )
      })

      it("should fail on wrong price (boolean)", () => {
        expect(() => logic.addBook(title, genre, false, author)).to.throw(
          Error,
          "false is not a string"
        )
      })

      //Author fail tests
      it("should fail on wrong author (undefined)", () => {
        expect(() => logic.addBook(title, genre, price, undefined)).to.throw(
          TypeError,
          "undefined is not a string"
        )
      })

      it("should fail on wrong author (empty or blank)", () => {
        expect(() => logic.addBook(title, genre, price, "    ")).to.throw(
          Error,
          "author is empty or blank"
        )
      })

      it("should fail on wrong author (number)", () => {
        expect(() => logic.addBook(title, genre, price, 2)).to.throw(
          Error,
          "2 is not a string"
        )
      })

      it("should fail on wrong author (boolean)", () => {
        expect(() => logic.addBook(title, genre, price, false)).to.throw(
          Error,
          "false is not a string"
        )
      })
    })

  
     describe("editBookGenre", () => {
      let oldGenre, newGenre, books

      beforeEach(async () => {
        oldGenre = "novel"
        newGenre = "fantasy"
        books = await logic.retrieveBooks()
      })

      it("should succed on correct data", async () => {
        await logic.editBookGenre(oldGenre, newGenre)

        const _books = await logic.retrieveBooks()

        expect(_books[1]).to.be.an("object")
        expect(books[1].title).to.be.equal(_books[1].title)
        expect(books[1].genre).to.be.equal("novel")
        expect(books[1].price).to.be.equal(_books[1].price)
        expect(books[1].author).to.be.equal(_books[1].author)
      })

      //oldGenre fail tests
      it("should fail on wrong oldGenre (undefined)", () => {
        expect(() => logic.editBookGenre(undefined, newGenre)).to.throw(
          TypeError,
          "undefined is not a string"
        )
      })

      it("should fail on wrong oldGenre (empty or blank)", () => {
        expect(() => logic.editBookGenre("    ", newGenre)).to.throw(
          Error,
          "oldGenre is empty or blank"
        )
      })

      it("should fail on wrong oldGenre (number)", () => {
        expect(() => logic.editBookGenre(2, newGenre)).to.throw(
          Error,
          "2 is not a string"
        )
      })

      it("should fail on wrong oldGenre (boolean)", () => {
        expect(() => logic.editBookGenre(false, newGenre)).to.throw(
          Error,
          "false is not a string"
        )
      })

      //newGenre fail tests
      it("should fail on wrong newGenre (undefined)", () => {
        expect(() => logic.editBookGenre(oldGenre, undefined)).to.throw(
          TypeError,
          "undefined is not a string"
        )
      })

      it("should fail on wrong newGenre (empty or blank)", () => {
        expect(() => logic.editBookGenre(oldGenre, "    ")).to.throw(
          Error,
          "newGenre is empty or blank"
        )
      })

      it("should fail on wrong newGenre (number)", () => {
        expect(() => logic.editBookGenre(oldGenre, 2)).to.throw(
          Error,
          "2 is not a string"
        )
      })

      it("should fail on wrong newGenre (boolean)", () => {
        expect(() => logic.editBookGenre(oldGenre, false)).to.throw(
          Error,
          "false is not a string"
        )
      })
    })

  
    describe("editBook", () => {
      let title, genre, price, author, books

      beforeEach(async () => {
        title = "luna llena"
        genre = "novela romantica"
        price = "22"
        author = "federico mercurio"
        books = await logic.retrieveBooks()
      })

      it("should succed on correct data", async () => {
        await logic.editBook(books[2].id, title, genre, price, author)
        
        const _books = await logic.retrieveBooks()

        expect(_books[2]).to.be.an("object")
        expect(_books[2].title).to.be.equal("luna llena")
        expect(_books[2].price).to.be.equal("22")
        expect(_books[2].author).to.be.equal("federico mercurio")
      })

      //Id fail tests
      it("should fail on wrong id (undefined)", () => {
        expect(() =>
          logic.editBook(undefined, title, genre, price, author)
        ).to.throw(TypeError, "undefined is not a number")
      })

      it("should fail on wrong id (empty or blank)", () => {
        expect(() =>
          logic.editBook("    ", title, genre, price, author)
        ).to.throw(Error, " is not a number")
      })

      it("should fail on wrong id (boolean)", () => {
        expect(() =>
          logic.editBook(false, title, genre, price, author)
        ).to.throw(Error, "false is not a number")
      })

      //Title fail tests
      it("should fail on wrong title (undefined)", () => {
        expect(() =>
          logic.editBook(books[2].id, undefined, genre, price, author)
        ).to.throw(TypeError, "undefined is not a string")
      })

      it("should fail on wrong title (empty or blank)", () => {
        expect(() =>
          logic.editBook(books[2].id, "    ", genre, price, author)
        ).to.throw(Error, "title is empty or blank")
      })

      it("should fail on wrong title (number)", () => {
        expect(() =>
          logic.editBook(books[2].id, 2, genre, price, author)
        ).to.throw(Error, "2 is not a string")
      })

      it("should fail on wrong title (boolean)", () => {
        expect(() =>
          logic.editBook(books[2].id, false, genre, price, author)
        ).to.throw(Error, "false is not a string")
      })

      //Genre fail tests
      it("should fail on wrong genre (undefined)", () => {
        expect(() =>
          logic.editBook(books[2].id, title, undefined, price, author)
        ).to.throw(TypeError, "undefined is not a string")
      })

      it("should fail on wrong genre (empty or blank)", () => {
        expect(() =>
          logic.editBook(books[2].id, title, "    ", price, author)
        ).to.throw(Error, "genre is empty or blank")
      })

      it("should fail on wrong genre (number)", () => {
        expect(() =>
          logic.editBook(books[2].id, title, 2, price, author)
        ).to.throw(Error, "2 is not a string")
      })

      it("should fail on wrong genre (boolean)", () => {
        expect(() =>
          logic.editBook(books[2].id, title, false, price, author)
        ).to.throw(Error, "false is not a string")
      })

      //Price fail tests
      it("should fail on wrong price (undefined)", () => {
        expect(() =>
          logic.editBook(books[2].id, title, genre, undefined, author)
        ).to.throw(TypeError, "undefined is not a string")
      })

      it("should fail on wrong price (empty or blank)", () => {
        expect(() =>
          logic.editBook(books[2].id, title, genre, "    ", author)
        ).to.throw(Error, "price is empty or blank")
      })

      it("should fail on wrong price (number)", () => {
        expect(() =>
          logic.editBook(books[2].id, title, genre, 2, author)
        ).to.throw(Error, "2 is not a string")
      })

      it("should fail on wrong price (boolean)", () => {
        expect(() =>
          logic.editBook(books[2].id, title, genre, false, author)
        ).to.throw(Error, "false is not a string")
      })

      //Author fail tests
      it("should fail on wrong author (undefined)", () => {
        expect(() =>
          logic.editBook(books[2].id, title, genre, price, undefined)
        ).to.throw(TypeError, "undefined is not a string")
      })

      it("should fail on wrong author (empty or blank)", () => {
        expect(() =>
          logic.editBook(books[2].id, title, genre, price, "    ")
        ).to.throw(Error, "author is empty or blank")
      })

      it("should fail on wrong author (number)", () => {
        expect(() =>
          logic.editBook(books[2].id, title, genre, price, 2)
        ).to.throw(Error, "2 is not a string")
      })

      it("should fail on wrong author (boolean)", () => {
        expect(() =>
          logic.editBook(books[2].id, title, genre, price, false)
        ).to.throw(Error, "false is not a string")
      })
    })

  
     describe("deleteBook", () => {
      let books

      beforeEach(async () => books = await logic.retrieveBooks())

      it("should succed on correct data", async () => {
        await logic.deleteBook(books[0].id)

        const _books = await logic.retrieveBooks()

        expect(_books[1]).to.be.an("object")
        expect(_books.length).to.be.equal(books.length - 1)
        expect(books[0].title).to.be.equal("Don Quixote")
        expect(books[0].author).to.be.equal("Miguel De Cervantes")
        expect(_books[1].title).to.be.equal(books[2].title)
        expect(_books[1].author).to.be.equal(books[2].author)
      })

      //id fail tests
      it("should fail on wrong id (undefined)", () => {
        expect(() => logic.deleteBook(undefined)).to.throw(
          TypeError,
          "undefined is not a number"
        )
      })

      it("should fail on wrong id (empty or blank)", () => {
        expect(() => logic.deleteBook("    ")).to.throw(
          Error,
          " is not a number"
        )
      })

      it("should fail on wrong id (boolean)", () => {
        expect(() => logic.deleteBook(false)).to.throw(
          Error,
          "false is not a number"
        )
      })
    })

  
     describe("deleteBookForGenre", () => {
      let books, genre

      beforeEach(async () => {
        books = await logic.retrieveBooks()
        genre = "novel"
      })

      it("should succed on correct data", async () => {
        await logic.deleteBookForGenre(genre)

        const _books = await logic.retrieveBooks()

        expect(_books[1]).to.be.an("object")
        expect(_books.length).to.be.equal(books.length -1)
        expect(_books[1].title).to.be.equal("mortadelo")
        expect(_books[1].author).to.be.equal("Pablo Ibañez")
        expect(_books[1].title).to.be.equal(books[2].title)
        expect(_books[1].author).to.be.equal(books[2].author)
      })

      //Genre fail tests
      it("should fail on wrong genre (undefined)", () => {
        expect(() => logic.deleteBookForGenre(undefined)).to.throw(
          TypeError,
          "undefined is not a string"
        )
      })

      it("should fail on wrong genre (empty or blank)", () => {
        expect(() => logic.deleteBookForGenre("    ")).to.throw(
          Error,
          "name is empty or blank"
        )
      })

      it("should fail on wrong genre (number)", () => {
        expect(() => logic.deleteBookForGenre(2)).to.throw(
          Error,
          "2 is not a string"
        )
      })

      it("should fail on wrong genre (boolean)", () => {
        expect(() => logic.deleteBookForGenre(false)).to.throw(
          Error,
          "false is not a string"
        )
      })
    })

  
    describe("retrieveGenres", () => {
      it("should succed on correct data(retrieve all genres)", async () => {
        const genres = await logic.retrieveGenres()

        expect(genres).to.be.an("array")
        expect(genres.length).to.be.equal(3)
        expect(genres[1].name).to.be.equal("fantasy")
      })
    })

     describe("addGenre", () => {
      let name

      beforeEach(() => {
        name = 'genre ' + Math.random() * 100
      })

      it("should succed on correct data", async () => {
        await logic.addGenre(name)

        const genres = await logic.retrieveGenres()

        expect(genres).to.be.an("array")
        expect(genres.length).to.be.equal(4)
        expect(genres[3].name).to.be.equal(name)
      })

      //Name fail tests
      it("should fail on wrong name (undefined)", () => {
        expect(() => logic.addGenre(undefined)).to.throw(
          TypeError,
          "undefined is not a string"
        )
      })

      it("should fail on wrong name (empty or blank)", () => {
        expect(() => logic.addGenre("    ")).to.throw(
          Error,
          "name is empty or blank"
        )
      })

      it("should fail on wrong name (number)", () => {
        expect(() => logic.addGenre(2)).to.throw(Error, "2 is not a string")
      })

      it("should fail on wrong name (boolean)", () => {
        expect(() => logic.addGenre(false)).to.throw(
          Error,
          "false is not a string"
        )
      })
    })
  
     describe("editgenre", () => {
      let name, genres

      beforeEach(async () => {
        name = "fear"
        genres = await logic.retrieveGenres()
      })

      it("should succed on correct data", async () => {
        await logic.editGenre(genres[2].id, name)

        const _genres = await logic.retrieveGenres()

        expect(_genres[2]).to.be.an("object")
        expect(_genres[2].name).to.be.equal("fear")
      })

      //id fail tests
      it("should fail on wrong id (undefined)", () => {
        expect(() => logic.editGenre(undefined, name)).to.throw(
          TypeError,
          "undefined is not a number"
        )
      })

      it("should fail on wrong id (empty or blank)", () => {
        expect(() => logic.editGenre("    ", name)).to.throw(
          Error,
          " is not a number"
        )
      })

      it("should fail on wrong id (string)", () => {
        expect(() => logic.editGenre("2", name)).to.throw(
          Error,
          "2 is not a number"
        )
      })

      it("should fail on wrong id (boolean)", () => {
        expect(() => logic.editGenre(false, name)).to.throw(
          Error,
          "false is not a number"
        )
      })

      //name fail tests
      it("should fail on wrong name (undefined)", () => {
        expect(() => logic.editGenre(genres[0].id, undefined)).to.throw(
          TypeError,
          "undefined is not a string"
        )
      })

      it("should fail on wrong name (empty or blank)", () => {
        expect(() => logic.editGenre(genres[0].id, "    ")).to.throw(
          Error,
          "name is empty or blank"
        )
      })

      it("should fail on wrong name (number)", () => {
        expect(() => logic.editGenre(genres[0].id, 2)).to.throw(
          Error,
          "2 is not a string"
        )
      })

      it("should fail on wrong name (boolean)", () => {
        expect(() => logic.editGenre(genres[0].id, false)).to.throw(
          Error,
          "false is not a string"
        )
      })
    })
    

   describe("deleteGenre", () => {
    let genres

    beforeEach(async () => (genres = await logic.retrieveGenres()))

    it("should succed on correct data", async () => {
      await logic.deleteGenre(genres[0].id)

      const _genres = await logic.retrieveGenres()

      expect(_genres[1]).to.be.an("object")
      expect(_genres.length).to.be.equal(genres.length -1)
      expect(genres[0].name).to.be.equal("novel")
      expect(_genres[0].name).to.be.equal("fantasy")
      expect(_genres[1].name).to.be.equal(genres[2].name)
    })

    //id fail tests
    it("should fail on wrong id (undefined)", () => {
      expect(() => logic.deleteGenre(undefined)).to.throw(TypeError,"undefined is not a number")
    })

    it('should fail on wrong id (empty or blank)', () => {
        expect(() => logic.deleteGenre(' ')).to.throw(Error, ' is not a number')
    })

    it('should fail on wrong id (boolean)', () => {
        expect(() => logic.deleteGenre(false)).to.throw(Error, 'false is not a number')
    })
  })
})
