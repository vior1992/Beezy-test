import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Genre from '../Genre'
import logic from '../../logic'
import './styles.css'

class Genres extends Component {
    state = { genres: [] }

    componentDidMount() {
        this.setState({ genres: logic.retrieveGenres() })  
    }

    handleRefresh = () => {            
        this.setState({ genres: logic.retrieveGenres() })
    }

    render() {
        return <div>
            <Navbar/>
            <div className='genresSite__container'>
                <Link to='/genres/new'>
                    <button className="container__button" type="button">New genre</button>
                </Link>
                <div className='container__genrelist'>
                    {this.state.genres.map(genre => <Genre 
                        id={genre.id} 
                        name={genre.name} 
                        onEditOrDelete={this.handleRefresh} 
                    />)}
                </div>
            </div>
        </div>
    }
}

export default Genres