import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Book from '../Book'
import logic from '../../logic'

class Books extends Component {
    state = { books: [] }

    componentDidMount() {
        const books = logic.retrieveBooks()

        this.setState({ books })  
    }

    render() {
        return <div>
            <Navbar 
            onLogoClick={this.props.onLogoClick} 
            onBooksClick={this.props.onBooksClick} 
            onGenresClick={this.props.onGenresClick}
            />
            <Link to='/books/new'> 
                <button type="button">new Book</button>
            </Link> 
            <h1>Books</h1>
            <div>
                {this.state.books.map(book => <Book 
                    title={book.title} 
                    genre={book.genre} 
                    price={book.price} 
                    author={book.author} 
                    editMode={true}
                />)}
            </div>
        </div>
    }
}

export default Books