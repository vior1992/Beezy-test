import React from 'react'

function navbar(props){
    return <div>
        <div className="navbar__container">
            <div className="container__logo">
                <a href="#" className="logo__link" onClick={props.onLogoClick}>Logo</a>
            </div>
            <div className="container__link">
                <a href="#" className="link__books" onClick={props.onBooksClick}>Books</a>
                <a href="#" className="link__genres" onClick={props.onGenresClick}>Genres</a>
            </div>
        </div>
    </div>  
}

export default navbar