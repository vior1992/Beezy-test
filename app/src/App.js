import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'
import Landing from './components/Landing'
import Genres from './components/Genres'
import NewGenre from './components/NewGenre'
import EditGenre from './components/EditGenre'
import Books from './components/Books'
import NewBook from './components/NewBook'
import EditBook from './components/EditBook'

import './App.css'

class App extends Component {
  state = { error: null, allBooks: [], allGenres: []}

  handleLogoClick = event => {
    event.preventDefault()

    this.props.history.push('/')

    this.setState({ error: null })
  }

  handleBooksClick = event => {
    event.preventDefault()

    this.props.history.push('/books')

    this.setState({ error: null })
  }

  handleGenresClick = event => {
    event.preventDefault()

    this.props.history.push('/genres')

    this.setState({ error: null })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => <Landing/>}/>
        <Route exact path='/genres' render={() => <Genres/>}/>
        <Route path='/genres/new' render={() => <NewGenre/>}/>
        <Route path='/genres/edit' render={() => <EditGenre/>}/>
        <Route exact path='/books' render={() => <Books/>}/>
        <Route path='/books/new' render={() => <NewBook/>}/>
        <Route path='/books/edit' render={() => <EditBook/>}/>
      </div>
    )
  }
}

export default withRouter(App);
