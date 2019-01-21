import React, { Component } from 'react'
import EditGenre from '../EditGenre'
import logic from '../../logic'
import './styles.css'

class Genre extends Component {
    state = { editMode: false }

    handlEndEditMode = () => {
        this.setState({ editMode: false })

        this.props.onEditOrDelete()
    }

    handleDeleteClick = async () => { 
        await logic.deleteBookForGenre(this.props.name)
        
        await logic.deleteGenre(this.props.id)
        
        this.props.onEditOrDelete()
    }

    render() {
        return <div>
            {this.state.editMode === false 
            ?
                <div className='genre'>
                    <div className='genre__container'>
                        <div>
                            <h1 className='genre__name'>{this.props.name}</h1>
                        </div>
                        <div>
                            <button className='buttons__edit' onClick={() => this.setState({ editMode: true })}>Edit</button>
                            <button className='buttons__delete' onClick={this.handleDeleteClick}>Delete</button>
                        </div>
                    </div>
                </div>
            :
                <EditGenre 
                    {...this.props}
                    onEndEditMode={this.handlEndEditMode}
                />
            }
        </div>
    }
}

export default Genre