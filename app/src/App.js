import React, { Component } from 'react'
import { Route } from 'react-router'
import Landing from './components/Landing'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Landing/>}/>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    )
  }
}

export default App;
