import React, { Component } from 'react'
import Navbar from '../Navbar'
import Book from '../Book'
import logic from '../../logic'
import './styles.css'

class Landing extends Component {
    state = { books: [], genres: [] }

    async componentDidMount() {
        const genres = await logic.retrieveGenres()

        const books = await logic.retrieveBooks()

        this.setState({ genres, books })    
    }

    handleFilterChange = async event => {
        const filter = event.target.value

        const books = await logic.listBooksFiltered(filter)

        this.setState({ books })
    }

    render() {
        return <div>
            <Navbar/>
            <div className='landing__container'>
                <div className='landing__select'>
                    <h2>Filter for genre:</h2>
                    <select className='select' name='tags' id='' onChange={this.handleFilterChange}>
                        <option selected value='default'>All books</option>
                        {(this.state.genres || []).map(genre => 
                            <option value={genre.name}>{genre.name}</option>
                        )}
                    </select>
                </div>
                <div className='landing__booklist'>
                    {(this.state.books || []).map(book => <Book 
                        {...book}
                        viewMode={true}
                    />)}
                </div>
            </div>
        </div>
    }
}

export default Landing