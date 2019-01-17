import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Book from '../Book'
import logic from '../../logic'

class Books extends Component {
    state = { books: [], genres: [], filter: 'default' }

    componentDidMount() {
        this.setState({ books: logic.retrieveBooks() })  

        this.setState({ genres: logic.retrieveGenres() })
    }

    handleFilterChange = event => {
        let filter = event.target.value

        this.setState({ books: logic.listBooksFiltered(filter), filter: filter })
    }

    handleDeleteClick = id => {            
        logic.deleteBook(id)
        
        this.setState({ books: logic.listBooksFiltered(this.state.filter) })
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
            <h2>filter Books for genre:</h2>
            <select className='filter__selector' onChange={this.handleFilterChange}>
                <option selected value='default'>All books</option>
                {this.state.genres.length ? this.state.genres.map(genre => 
                    <option value={genre.name}>{genre.name}</option>
                ) : ''}
            </select>
            <h1>Books</h1>
            <div>
                {this.state.books.map(book => <Book 
                    id={book.id}
                    title={book.title} 
                    genre={book.genre} 
                    price={book.price} 
                    author={book.author} 
                    editMode={true}
                    onEditClick={this.handleEditClick} 
                    onDeleteClick={this.handleDeleteClick} 
                />)}
            </div>
        </div>
    }
}

export default Books