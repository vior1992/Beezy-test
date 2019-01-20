import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'
import Landing from './components/Landing'
import Genres from './components/Genres'
import NewGenre from './components/NewGenre'
import Books from './components/Books'
import NewBook from './components/NewBook'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' render={() => <Landing/>}/>
        <Route exact path='/genres' render={() => <Genres/>}/>
        <Route path='/genres/new' render={() => <NewGenre/>}/>
        <Route exact path='/books' render={() => <Books/>}/>
        <Route path='/books/new' render={() => <NewBook/>}/>
      </div>
    )
  }
}

export default withRouter(App);
