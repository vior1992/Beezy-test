import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Genre from '../Genre'
import logic from '../../logic'

class Genres extends Component {
    state = { error: null, genres: [] }

    // componentDidMount() {
    //     if (this.props) {

    //         const { newGenre } = this.props

    //         this.state.allGenres.push(newGenre)
    //     }
    // }

    componentDidMount() {
        const genres = logic.retrieveGenres()

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
                {this.state.genres.map(genre => <Genre name={genre.name}/>)}
            </div>
        </div>
    }
}

export default Genres