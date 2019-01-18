import React, { Component } from 'react'
import logic from '../../logic'

class EditBook extends Component {
    state = {  
        error:'',
        genres: this.props.genres,
        title: '', 
        genre: '', 
        price: '', 
        author: '',
        editedSuccesfully: false
    }
    
    handleEditBookTitle = event => {
        this.setState({ error: null })

        const title = event.target.value.toLowerCase()

        this.setState({ title })
    }

    handleEditBookGenre = event => {
        this.setState({ error: null })

        const genre = event.target.value

        this.setState({ genre })
    }

    handleEditBookPrice = event => {
        this.setState({ error: null })

        const price = event.target.value

        this.setState({ price })
    }

    handleEditBookAuthor = event => {
        this.setState({ error: null })

        const author = event.target.value

        this.setState({ author })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { title, genre, price, author } = this.state
        
        try {
            logic.editBook(this.props.id, title, genre, price, author)

            this.setState({ title: '', genre: '', price: '', author: '', editedSuccesfully: true })

            this.props.onEndEditMode()

        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input className='container__input'
                value={this.state.title} 
                type='text' 
                maxlength='30' 
                placeholder='Introduce a title (Max. 22 characters)' 
                onChange={this.handleEditBookTitle}
            />
            <select 
                value={this.state.genre}
                className='filter__selector' 
                name='tags' 
                id='' 
                onChange={this.handleEditBookGenre}
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
                onChange={this.handleEditBookPrice}
            />
            <input className='container__input'
                value={this.state.author} 
                type='text' 
                maxlength='22' 
                placeholder='Introduce a author (Max. 22 characters)' 
                onChange={this.handleEditBookAuthor}
            />
            <button type='submit'>Save changes</button>
            <button onClick={() => this.props.onEndEditMode()}>Cancel</button>
            {this.state.error ? <h1>{this.state.error}</h1> : ''}
            {this.state.editedSuccesfully && !this.state.error ? <h1>Book edited</h1> : ''}
        </form>
    }
}

export default EditBook