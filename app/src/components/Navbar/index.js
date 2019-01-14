import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return <div>
            <div className="navbar__container">
                <img src="logo" className="container__logo"></img>
                <div className="container__link">
                    <a href="#" className="link__books" onClick={() => { console.log('book') }}>Books</a>
                    <a href="#" className="link__genres" onClick={() => { console.log('Genres') }}>Genres</a>
                </div>
            </div>
        </div>
    }
}

export default Navbar