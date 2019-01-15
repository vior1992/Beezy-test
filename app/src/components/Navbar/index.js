import React from 'react'
import { Link } from 'react-router-dom'

function navbar(props){
    return <div>
        <nav className="navbar__container">
            <div className="container__logo">
                <Link to='/' className='link-logo'>Logo</Link>
            </div>
            <div className="container__link">
                <Link to='/books' className='link__books'>Books</Link>
                <Link to='/genres' className='link__genres'>Genres</Link>
            </div>
        </nav>
    </div>  
}

export default navbar