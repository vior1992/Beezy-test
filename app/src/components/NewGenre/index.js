import React, { Component } from 'react'
import Navbar from '../Navbar'
import logic from '../../logic'


class NewGenre extends Component {
    state = { error: null, addGenre: '', added: false }

    handleAddGenreChange = event => {
        const addGenre = event.target.value.toLowerCase()

        this.setState({ addGenre })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { addGenre } = this.state

        logic.addGenre(addGenre)

        this.setState({ addGenre: '', added: true })
    }

    render() {
        return <div>
            <Navbar/>
            <div className='addGenre_container'>
                <h2>Add a genre:</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className='container__input' 
                        value={this.state.addGenre} 
                        type='text' 
                        maxlength='22' 
                        placeholder='Introduce a name (Max. 22 characters)' 
                        onChange={this.handleAddGenreChange}
                    />
                    <button type='submit'>New genre</button>
                </form>
                {this.state.added ? <h1>genre added with success</h1> : ''}
            </div>
        </div>
    }
}

export default NewGenre