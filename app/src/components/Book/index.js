import React, { Component } from 'react'

class Book extends Component {
    render() {
        return <div>
            <div className="book__container">
                <h1>{this.props.title}</h1>
                <h2>{this.props.genre}</h2>
                <h2>{this.props.price}</h2>
                <h3>{this.props.author}</h3>  
            </div>
            {this.props.editMode ? 
                <div className="button__container">
                    <button >Edit</button>
                    <button onClick={() => this.props.onDeleteClick(this.props.id)}>Delete</button>
                </div> 
            : ''}
        </div>
    }
}

export default Book