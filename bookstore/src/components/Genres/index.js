import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Genre from '../Genre'
import logic from '../../logic'
import './styles.css'

class Genres extends Component {
    state = { genres: [] }

    componentDidMount = async () => {
        this.setState({ genres: await logic.retrieveGenres() })  
    }

    handleRefresh = async () => {            
        this.setState({ genres: await logic.retrieveGenres() })
    }

    render() {
        return <div>
            <Navbar/>
            <div className='genres__container'>
                <Link to='/genres/new'>
                    <button className='options__newGenreButton' type='button'>New Genre</button>
                </Link>
                <div className='genres__genrelist'>
                    {this.state.genres.map(genre => <Genre 
                        {...genre}
                        onEditOrDelete={this.handleRefresh} 
                    />)}
                </div>
            </div>
        </div>
    }
}

export default Genres