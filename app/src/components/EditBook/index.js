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
            <form className='editBook__container' onSubmit={this.handleSubmit}>
                <input className='container__input'
                    value={this.state.title} 
                    type='text' 
                    maxlength='30' 
                    placeholder='Introduce a title (Max. 30 characters)' 
                    onChange={this.handleEditBookTitle}
                />
                <select 
                    value={this.state.genre}
                    className='container__selector' 
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
                    maxlength='5'
                    placeholder='Introduce a price (Max. 5 characters)' 
                    onChange={this.handleEditBookPrice}
                />
                <input className='container__input'
                    value={this.state.author} 
                    type='text' 
                    maxlength='30' 
                    placeholder='Introduce a author (Max. 30 characters)' 
                    onChange={this.handleEditBookAuthor}
                />
                {this.state.error ? <h1 className='error'>{this.state.error}</h1> : ''}
                <div className='container__buttons'>
                    <button className='buttons' type='submit'>Save changes</button>
                    <button className='buttons' onClick={() => this.props.onEndEditMode()}>Cancel</button>
                </div>
            </form>
        </div> 
    }
}

export default EditBook