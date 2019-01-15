import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Genre from '../Genre'

class Genres extends Component {
    state = { error: null, allGenres: [] }

    componentDidMount() {
        if (this.props) {

            const { newGenre } = this.props

            this.state.allGenres.push(newGenre)
        }
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
                {this.state.allGenres.map(genre => <Genre name={genre}/>)}
            </div>
        </div>
    }
}

export default Genres