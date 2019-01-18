import React, { Component } from 'react'
import Navbar from '../Navbar'
import Book from '../Book'
import logic from '../../logic'
import './styles.css'

class Landing extends Component {
    state = { books: [], genres: [] }

    componentDidMount() {
        const books = logic.retrieveBooks()

        this.setState({ books })

        const genres = logic.retrieveGenres()

        this.setState({ genres })     
    }

    handleFilterChange = event => {
        let filter = event.target.value

        const books = logic.listBooksFiltered(filter)

        this.setState({ books })
    }

    render() {
        return <div>
            <Navbar 
            onLogoClick={this.props.onLogoClick} 
            onBooksClick={this.props.onBooksClick} 
            onGenresClick={this.props.onGenresClick}
            />
            <div className='landing__container'>
                <div className='container__filter'>
                    <h2>Filter for genre:</h2>
                    <select className='filter__selector' name='tags' id='' onChange={this.handleFilterChange}>
                        <option selected value='default'>All books</option>
                        {this.state.genres.length ? this.state.genres.map(genre => 
                            <option value={genre.name}>{genre.name}</option>
                        ) : ''}
                    </select>
                </div>
                <div className='container__booklist'>
                    {this.state.genres.length ? this.state.books.map(book => <Book 
                        title={book.title} 
                        genre={book.genre} 
                        price={book.price} 
                        author={book.author} 
                        viewMode={true}
                    />) : 
                    ''}
                </div>
            </div>
        </div>
    }
}

export default Landing