import React from 'react'

function EditBook() {
    return <form onSubmit={this.handleSubmit}>
        <input className='container__input'
            value={this.state.title} 
            type='text' 
            maxlength='30' 
            placeholder='Introduce a title (Max. 22 characters)' 
            onChange={this.handleEditBookTitle}
        />
        <select 
            value={this.state.genre}
            className='filter__selector' 
            name='tags' 
            id='' 
            onChange={this.handleEditBookGenre}
        >
            <option selected disabled value=''>Select a genre</option>
            {this.state.genres.map(genre => 
                <option value={genre.name}>{genre.name}</option>
            )}
        </select>
        <input className='container__input'
            value={this.state.price} 
            type='number' 
            maxlength="5"
            placeholder='Introduce a price (Max. 5 characters)' 
            onChange={this.handleEditBookPrice}
        />
        <input className='container__input'
            value={this.state.author} 
            type='text' 
            maxlength='22' 
            placeholder='Introduce a author (Max. 22 characters)' 
            onChange={this.handleEditBookAuthor}
        />
        <button type='submit'>Edit Book</button>
        <button onClick={() => this.setState({ editMode: false })}>Cancel</button>
    </form>
}

export default EditBook