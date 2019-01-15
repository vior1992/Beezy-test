import React, { Component } from 'react'

class Book extends Component {
    render() {
        return <div>
            <div className="book__container">
                <h1>{this.props.title}</h1>
                <h2>{this.props.genre}</h2>
                <h2>{this.props.price}</h2>
                <h3>{this.props.author}</h3>  
            </div>
            <div className="button__container">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    }
}

export default Book