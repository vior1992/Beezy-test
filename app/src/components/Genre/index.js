import React, { Component } from 'react'

class Genre extends Component {
    render() {
        return <div>
            <div className="genre__container">
                <h1>{this.props.name}</h1>
            </div>
            <div className="button__container">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    }
}

export default Genre