import React, { Component } from 'react'
import Navbar from '../Navbar'
import GenreFilter from '../GenreFilter'
import Book from '../Book'
import logic from '../../logic';

class Landing extends Component {
    state = { books: [], genres: '' }

    componentDidMount() {
        const books = logic.retrieveBooks()

        this.setState({ books })

        console.log(this.state.books)

        const genres = logic.retrieveGenres()
        console.log(genres)
        this.setState({ genres })     
        
        console.log(this.state.genres)
    }

    handleFilterChange = event => {
        let filter = event.target.value

        logic.listBooksFiltered(filter)
    }

    render() {
        return <div>
            <Navbar 
            onLogoClick={this.props.onLogoClick} 
            onBooksClick={this.props.onBooksClick} 
            onGenresClick={this.props.onGenresClick}
            />
            <GenreFilter/>
            <h2>filter the list for genre:</h2>
            <select className='filter__selector' name='tags' id='' onChange={this.handleFilterChange}>
                    <option selected value='default'>All books</option>
                    {/* {this.state.genres.forEach(genre => {
                        console.log(genre.name)
                    })} */}
                    {/* {this.state.genres.length ? this.state.genres.map(genre => 
                        <option value={genre.name}>{genre.name}</option>
                    ) : ''} */}
                </select>
            
            {/* <div>{this.state.genres.length ? this.state.AllBooks.map(book => <Book title={book.title} genre={book.genre} price={book.price} author={book.author}/>) : ''}</div> */}
            </div>
    }
}

export default Landing