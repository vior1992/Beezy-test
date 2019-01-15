import React, { Component } from 'react'
import Navbar from '../Navbar'
import Genre from '../Genre'


class Genres extends Component {
    state = { AllGenres: [{name:'prueba1'}, {name: 'prueba2'}], addGenre: null }

    handleAddGenreChange = event => {
        const addGenre = event.target.value

        this.setState({ addGenre })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { addGenre } = this.state 
        
        //Logic part

        this.setState({ addGenre: '' })
    }

    render() {
        return <div>
            <Navbar 
            onLogoClick={this.props.onLogoClick} 
            onBooksClick={this.props.onBooksClick} 
            onGenresClick={this.props.onGenresClick}
            />
            
            <div className='addGenre_container'>
                <h2>Add a genre:</h2>
                <input className='container__input' value={this.state.addGenre} type='text' maxlength='22' placeholder='Introduce a name (Max. 22 characters)' onChange={this.handleAddGenreChange}/>
                <button className='container__button' onClick={this.handleSubmit}>add</button>
            </div>
            <h1>Genres</h1>
            <div>
                {this.state.AllGenres.map(genre => <Genre name={genre.name}/>)}
            </div>
        </div>
    }
}

export default Genres