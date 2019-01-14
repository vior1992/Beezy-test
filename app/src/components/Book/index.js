import React, { Component } from 'react'

class Book extends Component {
    render() {
        return <div>
            <div className="Book__container">
                <h1>Title</h1>
                <h2>Short description</h2>
                <h2>Author</h2>
                <h2>Genre</h2>
            </div>
        </div>
    }
}

export default Book