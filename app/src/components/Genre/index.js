import React, { Component } from 'react'
import EditGenre from '../EditGenre'
import logic from '../../logic'
import './styles.css'

class Genre extends Component {
    state = { editMode: false }

    handlEndEditMode = () => {
        this.setState({ editMode: false })

        this.props.onEditOrDelete()
    }

    handleDeleteClick = () => {            
        logic.deleteGenre(this.props.id)

        logic.deleteBookForGenre(this.props.name)

        this.props.onEditOrDelete()
    }

    render() {
        return <div>
            {this.state.editMode === false ?
                <div className="genre__container">
                    <div>
                        <h1>{this.props.name}</h1>
                    </div>
                    <div className="button__container">
                        <button onClick={() => this.setState({ editMode: true })}>Edit</button>
                        <button onClick={this.handleDeleteClick}>Delete</button>
                    </div>
                </div>
            :
                <EditGenre id={this.props.id} onEndEditMode={this.handlEndEditMode}/>
            }
        </div>
    }
}

export default Genre