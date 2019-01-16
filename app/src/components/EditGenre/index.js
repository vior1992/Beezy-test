import React, { Component } from 'react'
import Navbar from '../Navbar'

class EditGenre extends Component {
    state = { error: null, AllGenres: [], editGenre: null }

    componentDidMount(){
        const prueba = this.props //not works, pasarme el id desde Genre
        console.log(prueba)
    }

    handleAddGenreChange = event => {
        const editGenre = event.target.value

        this.setState({ editGenre })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { editGenre } = this.state 

        this.setState({ editGenre: '' })

        this.state.AllGenres.push(editGenre)
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