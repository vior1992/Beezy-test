import React, { Component } from 'react'

class GenreFilter extends Component {
    state = { GenreFilter: '0' }

    handleGenreFilterChange = event => {
        let GenreFilter = event.target.value

        this.setState({ GenreFilter })
    }

    render() {
        return <div>
            <div className='GenreFilter__container'>
                <h1>Filter for genre:</h1>
                <select className='tags__selector' name='tags' id='' onChange={this.handleGenreFilterChange}>
                    <option selected value='0'>All books</option>
                    <option value='1'>Mistery</option>
                </select>
            </div>
        </div>
    }
}

export default GenreFilter