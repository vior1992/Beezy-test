import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function navbar(){
    return <div>
        <nav className="navbar__container">
            <div>
                <Link to='/' className='logo'>The Beezy Bookstore</Link>
            </div>
            <div>
                <Link to='/books' className='link__books'>Books</Link>
                <Link to='/genres' className='link__genres'>Genres</Link>
            </div>
        </nav>
    </div>  
}

export default navbar