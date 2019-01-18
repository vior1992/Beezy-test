import React, { Component } from 'react'
import logic from '../../logic'

class EditGenre extends Component {
    state = { error:'', name: '', editedSuccesfully: '' }

    handleNameChange = event => {
        this.setState({ error: null })

        const name = event.target.value.toLowerCase()

        this.setState({ name })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        try {
            logic.editGenre(this.props.id, this.state.name)

            this.setState({ name: '', editedSuccesfully: true })

            this.props.onEndEditMode()

        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input className='container__input' 
                value={this.state.name} 
                type='text' 
                maxlength='22' 
                placeholder='Introduce a name (Max. 22 characters)' 
                onChange={this.handleNameChange}
            />
            <button type='submit'>Save changes</button>
            <button onClick={() => this.props.onEndEditMode()}>Cancel</button>
            {this.state.error ? <h1>{this.state.error}</h1> : ''}
            {this.state.editedSuccesfully && !this.state.error ? <h1>Genre edited</h1> : ''}
        </form> 
        
    }
}

export default EditGenre