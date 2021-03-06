import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Book from '../Book'
import logic from '../../logic'
import './styles.css'

class Books extends Component {
    state = { books: [], genres: [], filter: 'default' }

    componentDidMount = async () => {
        this.setState({ books: await logic.retrieveBooks() })  

        this.setState({ genres: await logic.retrieveGenres() })
    }

    handleFilterChange = async event => {
        const filter = event.target.value

        this.setState({ books: await logic.listBooksFiltered(filter), filter: filter })
    }

    handleRefresh = async () => {            
        this.setState({ books: await logic.listBooksFiltered(this.state.filter) })
    }

    render() {
        return <div>
            <Navbar/>
            <div className='books__container'>
                <div className='books__options'>
                    <div className='options__select'>
                        <h2>Filter for genre:</h2>
                        <select className='select' onChange={this.handleFilterChange}>
                            <option selected value='default'>All books</option>
                            {(this.state.genres || []).map(genre => 
                                <option value={genre.name}>{genre.name}</option>
                            )}
                        </select>
                    </div>
                    <Link to='/books/new'> 
                        <button className='options__newBookButton' type='button'>New Book</button>
                    </Link> 
                </div>
                <div className='books__booklist'>
                    {(this.state.books || []).map(book => <Book 
                        {...book}
                        genres={this.state.genres}
                        viewMode={false}
                        onEditOrDelete={this.handleRefresh}
                    />)}
                </div>
            </div>
        </div>
    }
}

export default Books