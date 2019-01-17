import React, { Component } from 'react'
import Navbar from '../Navbar'
import logic from '../../logic'

class NewGenre extends Component {
    state = { error: null, addGenre: '', added: false }

    handleAddGenreChange = event => {
        this.setState({ error: null, added: false })

        const addGenre = event.target.value.toLowerCase()

        this.setState({ addGenre })
    }

    handleSubmit = async event => {
        event.preventDefault()
        
        try {
            logic.addGenre(this.state.addGenre)

            this.setState({ added: true, addGenre: '' })
        } catch (err) {
            this.setState({ error: err.message })
        }
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
                {this.state.added && !this.state.error ? <h1>Genre '{this.state.addGenre}' created succesfully</h1> : <h1>{this.state.error}</h1>}
            </div>
        </div>
    }
}

export default NewGenre