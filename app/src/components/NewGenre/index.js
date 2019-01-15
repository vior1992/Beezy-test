import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'

class NewGenre extends Component {
    state = { error: null, addGenre: '' }

    handleAddGenreChange = event => {
        const addGenre = event.target.value.toLowerCase()

        this.setState({ addGenre })
    }

    // handleSubmit = event => {
    //     event.preventDefault()

    //     const { addGenre } = this.state

    //     this.setState({ addGenre: '' })

    //     this.state.AllGenres.push(addGenre)
    // }

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
                    <Link to={{
                        pathname:'/genres',
                        addGenre: this.state.addGenre
                    }}>
                        <button type='submit'> New genre </button>
                    </Link>
                </form>
            </div>
        </div>
    }
}

export default NewGenre