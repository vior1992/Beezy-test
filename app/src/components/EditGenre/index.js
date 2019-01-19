import React, { Component } from 'react'
import logic from '../../logic'
import './styles.css'

class EditGenre extends Component {
    state = { error:'', name: '' }

    handleNameChange = event => {
        this.setState({ error: null })

        const name = event.target.value.toLowerCase()

        this.setState({ name })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        try {
            logic.editGenre(this.props.id, this.state.name)

            this.setState({ name: '' })

            this.props.onEndEditMode()

        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <div>
            <form className='editGenre__container'onSubmit={this.handleSubmit}>
                <input className='container__input' 
                    value={this.state.name} 
                    type='text' 
                    maxlength='18' 
                    placeholder='Introduce a name (Max. 18 characters)' 
                    onChange={this.handleNameChange}
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

export default EditGenre