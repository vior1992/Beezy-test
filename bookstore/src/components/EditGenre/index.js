import React, { Component } from 'react'
import logic from '../../logic'
import './styles.css'

class EditGenre extends Component {
    state = { error:'', name: '' }

    componentDidMount = () => {
        const name = this.props.name

        this.setState({ name })
    }

    handleNameChange = event => {
        this.setState({ error: null })

        const name = event.target.value.toLowerCase()

        this.setState({ name })
    }

    handleSubmit = async event => {
        event.preventDefault()
        
        try {
            await logic.editGenre(this.props.id, this.state.name)

            this.setState({ name: '' })

            this.props.onEndEditMode()

        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <div>
            <div className='editGenre'>
                <form className='editGenre__container'onSubmit={this.handleSubmit}>
                    <input className='editGenre__input' 
                        value={this.state.name} 
                        type='text' 
                        maxlength='18' 
                        placeholder='Introduce a name (Max. 18 characters)' 
                        onChange={this.handleNameChange}
                    />
                    {this.state.error ? <h1 className='editGenre__error'>{this.state.error}</h1> : ''}
                    <div>
                        <button className='buttons__edit' type='submit'>Save</button>
                        <button className='buttons__cancel' onClick={() => this.props.onEndEditMode()}>Cancel</button>
                    </div>
                </form> 
            </div>
        </div>
    }
}

export default EditGenre