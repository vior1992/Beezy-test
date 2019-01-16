class Genre {
    constructor({ id, name }) {
        this.id = id || Date.now()+Math.floor(Math.random() * 100) + 1
        this.name = name
    }
}

export default Genre