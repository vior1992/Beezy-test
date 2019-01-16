import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Genre from '../Genre'
import logic from '../../logic'

class Genres extends Component {
    state = { error: null, genres: [] }

    componentDidMount() {
        const genres = logic.retrieveGenres()

        this.setState({ genres })  
    }

    handleDeleteClick = id => {
        // Not Works Right
            
        const genres = logic.deleteGenre(id)
        console.log(genres)
        this.setState({ genres })
    }

    render() {
        return <div>
            <Navbar/>
            <Link to='/genres/new'>
                <button type="button" onClick={this.state.allGenres}>
                    New genre
                </button>
            </Link>
            <h1>Genres</h1>
            <div>
                {this.state.genres.map(genre => <Genre id={genre.id} name={genre.name} onEditClick={this.handleEditClick} onDeleteClick={this.handleDeleteClick} />)}
            </div>
        </div>
    }
}

export default Genres