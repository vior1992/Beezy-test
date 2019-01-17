import React, { Component } from 'react'
import logic from '../../logic'

class Genre extends Component {
    state = { error: null, editMode: false, name: '', editedSuccesfully: false}

    handleEditMode = () => {
        this.setState({ editMode: true })
    }

    handleEditGenreChange = event => {
        this.setState({ error: null })

        const name = event.target.value.toLowerCase()

        this.setState({ name })
    }

    handleSubmit = async event => {
        event.preventDefault()
        
        try {
            logic.editGenre(this.props.id, this.state.name)

            this.setState({ editMode: false, name: '', editedSuccesfully: true })

            this.props.onEditOrDelete()
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleDeleteClick = () => {            
        logic.deleteGenre(this.props.id)

        logic.deleteBookForGenre(this.props.name)

        this.setState({ genres: logic.retrieveGenres() })

        this.props.onEditOrDelete()
    }

    render() {
        return <div>
            {this.state.editMode === true ?
                <form onSubmit={this.handleSubmit}>
                        <input className='container__input' 
                            value={this.state.name} 
                            type='text' 
                            maxlength='22' 
                            placeholder='Introduce a name (Max. 22 characters)' 
                            onChange={this.handleEditGenreChange}
                        />
                        <button type='submit'>Save changes</button>
                </form>
                :
                <div>
                    <div className="genre__container">
                        <h1>{this.props.name}</h1>
                    </div>
                    <div className="button__container">
                        <button onClick={this.handleEditMode}>Edit</button>
                        <button onClick={this.handleDeleteClick}>Delete</button>
                    </div>
                </div>
            }
            {this.state.error ? <h1>{this.state.error}</h1> : ''}
            {this.state.editedSuccesfully && !this.state.error ? <h1>Name changed</h1> : ''}
        </div>
    }
}

export default Genre