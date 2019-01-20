import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import logic from '../../logic'
import './styles.css'

class NewBook extends Component {
    state = { 
        loaded: false,
        error: null,
        genres: [],
        title: '',
        genre: '',
        price: '', 
        author:'', 
        added: false
    }

    componentDidMount = async () => {
        const genres = await logic.retrieveGenres()
    
        this.setState({ genres, loaded: true })
    }

    handleTitleChange = event => {
        this.setState({ error: null, added: false })

        const title = event.target.value.toLowerCase()

        this.setState({ title })
    }

    handleGenreChange = event => {
        const genre = event.target.value

        this.setState({ genre })
    }

    handlePriceChange = event => {
        this.setState({ error: null, added: false })

        const price = event.target.value

        this.setState({ price })
    }

    handleAuthorChange = event => {
        this.setState({ error: null, added: false })

        const author = event.target.value

        this.setState({ author })
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { title, genre, price, author } = this.state
        
        try {
            await logic.addBook(title, genre, price, author)

            this.setState({ added: true, title: '', genre: '', price: '', author: '' })
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <div>
            <Navbar/>
            <div className='newBook'>
                <h2>Create book:</h2>
                {this.state.loaded && this.state.genres.length === 0 
                    ? <h1 className='newBook__error'>No genres, create a genre first</h1> 
                    : ""
                }
                <form className='newBook__container' onSubmit={this.handleSubmit}>
                    <input className='newBook__input'
                        value={this.state.title} 
                        type='text' 
                        maxlength='30' 
                        placeholder='Introduce a title (Max. 30 characters)' 
                        onChange={this.handleTitleChange}
                    />
                    <select 
                        value={this.state.genre}
                        className='newBook__select' 
                        name='tags' 
                        onChange={this.handleGenreChange}
                    >
                        <option selected disabled value=''>Select a genre</option>
                        {this.state.genres.map(genre => 
                            <option value={genre.name}>{genre.name}</option>
                        )}
                    </select>
                    <input className='newBook__input'
                        value={this.state.price} 
                        type='number'
                        max='5'
                        placeholder='Introduce a price (Max. 5 characters)' 
                        onChange={this.handlePriceChange}
                    />
                    <input className='newBook__input'
                        value={this.state.author} 
                        type='text' 
                        maxlength='22' 
                        placeholder='Introduce a author (Max. 22 characters)' 
                        onChange={this.handleAuthorChange}
                    />
                    <div>
                        <button className='buttons__new' type='submit'>New Book</button>
                        <Link to='/books'>
                            <button className='buttons__back'>Back</button>
                        </Link>
                    </div>
                    {this.state.added && !this.state.error 
                        ? <h1 className='newBook__message'>Book created succesfully</h1> 
                        : <h1 className='newBook__error'>{this.state.error}</h1>
                    }
                </form>
            </div>
        </div>
    }
}

export default NewBook