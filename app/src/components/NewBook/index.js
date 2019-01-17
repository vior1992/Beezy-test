import React, { Component } from 'react'
import Navbar from '../Navbar'
import logic from '../../logic'

class NewBook extends Component {
    state = { error: null,
        genres: [],
        title: '',
        genre: '',
        price: '', 
        author:'', 
        added: false 
    }

    componentDidMount() {
        const genres = logic.retrieveGenres()
    
        this.setState({ genres })
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

    handleSubmit = event => {
        event.preventDefault()

        const { title, genre, price, author } = this.state
        
        try {
            logic.addBook(title, genre, price, author)

            this.setState({ added: true, title: '', genre: '', price: '', author: '' })
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <div>
            <Navbar/>
            <div className='addBook_container'>
                <h2>Add a book:</h2>
                {this.state.genres.length === 0 ? <h1>No genres, create a genre first</h1> : ""}
                <form onSubmit={this.handleSubmit}>
                    <input className='container__input'
                        value={this.state.title} 
                        type='text' 
                        maxlength='30' 
                        placeholder='Introduce a title (Max. 22 characters)' 
                        onChange={this.handleTitleChange}
                    />
                    <select 
                        value={this.state.genre}
                        className='filter__selector' 
                        name='tags' 
                        id='' 
                        onChange={this.handleGenreChange}
                    >
                        <option selected disabled value=''>Select a genre</option>
                        {this.state.genres.map(genre => 
                            <option value={genre.name}>{genre.name}</option>
                        )}
                    </select>
                    <input className='container__input'
                        value={this.state.price} 
                        type='number' 
                        maxlength="5"
                        placeholder='Introduce a price (Max. 5 characters)' 
                        onChange={this.handlePriceChange}
                    />
                    <input className='container__input'
                        value={this.state.author} 
                        type='text' 
                        maxlength='22' 
                        placeholder='Introduce a author (Max. 22 characters)' 
                        onChange={this.handleAuthorChange}
                    />
                    <button type='submit'>New Book</button>
                </form>
                {this.state.added && !this.state.error ? 
                    <h1>Book created succesfully</h1> :
                    <h1>{this.state.error}</h1>
                }
            </div>
        </div>
    }
}

export default NewBook