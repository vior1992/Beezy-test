import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'
import Landing from './components/Landing'
import Books from './components/Books'
import Genres from './components/Genres'

import './App.css'

class App extends Component {
  state = { error: null}

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
        <Route exact path='/' render={() => <Landing onLogoClick={this.handleLogoClick} onBooksClick={this.handleBooksClick} onGenresClick={this.handleGenresClick}/>}/>
        <Route path='/books' render={() => <Books onLogoClick={this.handleLogoClick} onBooksClick={this.handleBooksClick} onGenresClick={this.handleGenresClick}/>}/>
        <Route path='/genres' render={() => <Genres onLogoClick={this.handleLogoClick} onBooksClick={this.handleBooksClick} onGenresClick={this.handleGenresClick}/>}/>
      </div>
    )
  }
}

export default withRouter(App);
