import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Book from '../Book'
import logic from '../../logic'
import './styles.css'

class Books extends Component {
    state = { books: [], genres: [], filter: 'default' }

    componentDidMount() {
        this.setState({ books: logic.retrieveBooks() })  

        this.setState({ genres: logic.retrieveGenres() })
    }

    handleFilterChange = event => {
        const filter = event.target.value

        this.setState({ books: logic.listBooksFiltered(filter), filter: filter })
        console.log(this.state.books)
    }

    handleRefresh = () => {            
        this.setState({ books: logic.listBooksFiltered(this.state.filter) })
    }

    render() {
        return <div>
            <Navbar/>
            <div className="booksSite__container">
                <div className='container__filter'>
                    <h2>Filter for genre:</h2>
                    <select onChange={this.handleFilterChange}>
                        <option selected value='default'>All books</option>
                        {this.state.genres.length ? this.state.genres.map(genre => 
                            <option value={genre.name}>{genre.name}</option>
                        ) : ''}
                    </select>
                </div>
                <Link to='/books/new'> 
                    <button className="container__button" type="button">New Book</button>
                </Link> 
                <div className='container__booklist'>
                    {this.state.books.map(book => <Book 
                        id={book.id}
                        genres={this.state.genres}
                        title={book.title} 
                        genre={book.genre} 
                        price={book.price} 
                        author={book.author} 
                        viewMode={false}
                        onEditOrDelete={this.handleRefresh}
                    />)}
                </div>
            </div>
        </div>
    }
}

export default Books