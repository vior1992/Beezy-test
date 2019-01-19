class Genre {
    constructor({ id, name }) {
        this.id = id || Date.now()+Math.floor(Math.random() * 100) + 1
        this.name = name
    }
}

//For run the app, uncomment this:
export default Genre

//For run the test, uncomment this:
// module.exports = Genre