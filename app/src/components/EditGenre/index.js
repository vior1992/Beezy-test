import React, { Component } from 'react'
import Navbar from '../Navbar'

class EditGenre extends Component {
    state = { error: null, AllGenres: [], addGenre: null }

    handleAddGenreChange = event => {
        const addGenre = event.target.value

        this.setState({ addGenre })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { addGenre } = this.state 

        this.setState({ addGenre: '' })

        this.state.AllGenres.push(addGenre)
    }

    render() {
        return <div>
            <Navbar/>
            
            <div className=''>
                <h2>Edit genre</h2>
                
                <input className='' 
                value={this.state.addGenre} 
                type='text' maxlength='22' 
                placeholder='Introduce a name (Max. 22 characters)' 
                onChange={this.handleAddGenreChange}
                />

                <button className='' onClick={this.handleSubmit}>Edit</button>
            </div>
        </div>
    }
}

export default EditGenre