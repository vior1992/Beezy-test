import React, { Component } from 'react'
import EditBook from '../EditBook'
import logic from '../../logic'
import './styles.css'

class Book extends Component {
    state = { editMode: false }

    handlEndEditMode = () => {
        this.setState({ editMode: false })

        this.props.onEditOrDelete()
    }

    handleDeleteClick = () => {            
        logic.deleteBook(this.props.id)
        
        this.props.onEditOrDelete()
    }

    render() {
        if (this.props.viewMode === true) {
            return <div>
                <div className="book__container">
                    <h1>{this.props.title}</h1>
                    <h2>Genre: {this.props.genre}</h2>
                    <h2>Price: {this.props.price}€</h2>
                    <h3>Author: {this.props.author}</h3>  
                </div>
            </div>
        } else {
            return <div>
                {this.state.editMode === false ?
                    <div className="book__container">
                        <div>
                            <h1>{this.props.title}</h1>
                            <h2>Genre: {this.props.genre}</h2>
                            <h2>Price: {this.props.price}€</h2>
                            <h3>Author: {this.props.author}</h3>  
                        </div>
                        <div>
                            <button onClick={() => this.setState({ editMode: true })}>Edit</button>
                            <button onClick={this.handleDeleteClick}>Delete</button>
                        </div>
                    </div>
                : 
                    <EditBook 
                        id={this.props.id} 
                        onEndEditMode={this.handlEndEditMode}
                        genres={this.props.genres}
                    />
                } 
                {this.state.error ? <h1>{this.state.error}</h1> : ''}
                {this.state.editedSuccesfully && !this.state.error ? <h1>Book edited</h1> : ''}
            </div>
        }
    }
}

export default Book