import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Genre extends Component {
    render() {
        return <div>
            <div className="genre__container">
                <h1>{this.props.name}</h1>
            </div>
            <div className="button__container">
            <Link to={{ pathname: '/genres/edit', props: { id: this.props.id }}}> 
                {/* Link not works */}
                <button>Edit</button>
            </Link> 
                <button onClick={() => this.props.onDeleteClick(this.props.id)}>Delete</button>
            </div>
        </div>
    }
}

export default Genre