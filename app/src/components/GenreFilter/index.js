import React, { Component } from 'react'

class GenreFilter extends Component {
    render() {
        return <div>
            <div className="GenreFilter__container">
                <h1>Filter for genrer:</h1>
                <select className="tags__selector" name="tags" id="" onChange={() => console.log('genres')}>
                    <option selected>All books</option>
                    <option value="pop">Pop</option>
                </select>
            </div>
        </div>
    }
}

export default GenreFilter