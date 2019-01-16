class Book {
    constructor({ id, title, genre, price, author }) {
        this.id = id || Date.now()+Math.floor(Math.random() * 100) + 1
        this.title = title
        this.genre = genre
        this.price = price
        this.author = author
    }
}

export default Book