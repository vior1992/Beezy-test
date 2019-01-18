import React, { Component } from 'react'
import EditBook from '../EditBook'
import logic from '../../logic'

class Book extends Component {
    state = { 
        error: null, 
        editMode: false, 
        genres: [],
        title: '', 
        genre: '', 
        price: '', 
        author: '', 
        editedSuccesfully: false
    }

    handleEditClick = () => {
        this.setState({ genres: logic.retrieveGenres(), editMode: true })
        // this.props.onEditClick()
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

            this.setState({ editMode: false, title: '', genre: '', price: '', author: '', editedSuccesfully: true })

            this.props.onEditClick()
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleDeleteClick = () => {            
        logic.deleteBook(this.props.id)
        
        this.props.onDeleteClick()
    }

    render() {
        if (this.props.viewMode === true) {
            return <div>
                <div className="book__container">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.genre}</h2>
                    <h2>{this.props.price}</h2>
                    <h3>{this.props.author}</h3>  
                </div>
            </div>
        } else {
            return <div>
                {this.state.editMode === false ?
                    <div>
                        <div className="book__container">
                            <h1>{this.props.title}</h1>
                            <h2>{this.props.genre}</h2>
                            <h2>{this.props.price}</h2>
                            <h3>{this.props.author}</h3>  
                        </div>
                        <div className="button__container">
                            <button onClick={this.handleEditClick}>Edit</button>
                            <button onClick={this.handleDeleteClick}>Delete</button>
                        </div>
                    </div>
                    : 
                    <EditBook />
                } 
                {this.state.error ? <h1>{this.state.error}</h1> : ''}
                {this.state.editedSuccesfully && !this.state.error ? <h1>Book edited</h1> : ''}
            </div>
        }
    }
}

export default Book