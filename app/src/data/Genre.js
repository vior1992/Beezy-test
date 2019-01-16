class Genre {
    constructor({ id, name }) {
        this.id = id || Date.now()
        this.name = name
    }
}

export default Genre