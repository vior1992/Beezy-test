import React, { Component } from 'react'
import logic from '../../logic'
import './styles.css'

class EditBook extends Component {
    state = {  
        error:'',
        genres: this.props.genres,
        title: '', 
        genre: '', 
        price: '', 
        author: ''
    }

    componentDidMount = () => {
        const { title, genre, price, author } = this.props

        this.setState({ title, genre, price, author })
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

    handleSubmit = async event => {
        event.preventDefault()

        const { title, genre, price, author } = this.state
        
        try {
            await logic.editBook(this.props.id, title, genre, price, author)

            this.setState({ title: '', genre: '', price: '', author: '' })

            this.props.onEndEditMode()

        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <div>
            <div className='editBook'>
                <form className='editBook__container' onSubmit={this.handleSubmit}>
                    <input className='editBook__input'
                        value={this.state.title} 
                        type='text' 
                        maxlength='30' 
                        placeholder='Introduce a title (Max. 30 characters)' 
                        onChange={this.handleEditBookTitle}
                    />
                    <select 
                        value={this.state.genre}
                        className='editBook__select' 
                        name='tags' 
                        id='' 
                        onChange={this.handleEditBookGenre}
                    >
                        <option selected disabled value=''>Select a genre</option>
                        {this.state.genres.map(genre => 
                            <option value={genre.name}>{genre.name}</option>
                        )}
                    </select>
                    <input className='editBook__input'
                        value={this.state.author} 
                        type='text' 
                        maxlength='30' 
                        placeholder='Introduce a author (Max. 30 characters)' 
                        onChange={this.handleEditBookAuthor}
                    />
                    <input className='editBook__input'
                        value={this.state.price} 
                        type='number' 
                        max='999'
                        placeholder='Introduce a price (Max. 3 characters)' 
                        onChange={this.handleEditBookPrice}
                    />
                    {this.state.error ? <h1 className='editBook__error'>{this.state.error}</h1> : ''}
                    <div>
                        <button className='buttons__edit' type='submit'>Save</button>
                        <button className='buttons__cancel' onClick={() => this.props.onEndEditMode()}>Cancel</button>
                    </div>
                </form>
            </div>
        </div> 
    }
}

export default EditBook