import React, { Component } from 'react'
import Navbar from '../Navbar'
import GenreFilter from '../GenreFilter'
import Book from '../Book'

class Landing extends Component {
    render() {
        return <div>
            <Navbar/>
            <GenreFilter/>
            <Book/>
            </div>
    }
}

export default Landing