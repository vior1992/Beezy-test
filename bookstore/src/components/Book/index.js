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

    handleDeleteClick = async () => {      
        await logic.deleteBook(this.props.id)
        
        this.props.onEditOrDelete()
    }

    render() {
        if (this.props.viewMode === true) {
            return <div className='book'>
                <div className='book__container'>
                    <h1 className='book__title'>{this.props.title}</h1>
                    <h2 className='book__genre'>Genre: {this.props.genre}</h2>
                    <h2 className='book__price'>Price: {this.props.price}€</h2>
                    <h3 className='book__author'>Author: {this.props.author}</h3>  
                </div>
            </div>
        } else {
            return <div className='book'>
                {this.state.editMode === false 
                ?
                    <div className='book__container'>
                        <div>
                            <h1 className='book__title'>{this.props.title}</h1>
                            <h2 className='book__genre'> Genre: {this.props.genre}</h2>
                            <h2 className='book__author'>Author: {this.props.author}</h2>
                            <h2 className='book__price'>Price: {this.props.price}€</h2>
                        </div>
                        <div>
                            <button className='buttons__edit' onClick={() => this.setState({ editMode: true })}>Edit</button>
                            <button className='buttons__delete' onClick={this.handleDeleteClick}>Delete</button>
                        </div>
                    </div>
                : 
                    <EditBook 
                        {...this.props}
                        onEndEditMode={this.handlEndEditMode}
                    />
                } 
            </div>
        }
    }
}

export default Book