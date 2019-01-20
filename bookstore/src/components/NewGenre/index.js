import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import logic from '../../logic'
import './styles.css'

class NewGenre extends Component {
    state = { error: null, addGenre: '', added: false }

    handleAddGenreChange = event => {
        this.setState({ error: null, added: false })

        const addGenre = event.target.value.toLowerCase()

        this.setState({ addGenre })
    }

    handleSubmit = async event => {
        event.preventDefault()
        
        try {
            await logic.addGenre(this.state.addGenre)

            this.setState({ added: true, addGenre: '' })
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <div>
            <Navbar/>
            <div className='newGenre'>
                <h2>Add a genre:</h2>
                <form className='newGenre__container' onSubmit={this.handleSubmit}>
                    <input className='newGenre__input' 
                        value={this.state.addGenre} 
                        type='text' 
                        maxlength='22' 
                        placeholder='Introduce a name (Max. 22 characters)' 
                        onChange={this.handleAddGenreChange}
                    />
                    <div>
                        <button className='buttons__new' type='submit'>New genre</button>
                        <Link to='/genres'>
                            <button className='buttons__back'>Back</button>
                        </Link>
                    </div>
                </form>
                {this.state.added && !this.state.error 
                    ? <h1 className='newGenre__message'>Genre created succesfully</h1> 
                    : <h1 className='newGenre__error'>{this.state.error}</h1>
                }
            </div>
        </div>
    }
}

export default NewGenre