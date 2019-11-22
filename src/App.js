// Import librairies
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './screen/Home'


// Import styles
import './App.css'
import Header from './components/Header'

export default class App extends React.Component {

  render() {

    return (

      <div className="App">

        <Header />

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
          <Route>
            {/* Warframe */}
          </Route>
          <Route>
            {/* Weapons */}
          </Route>
          <Route>
            {/* Mods */}
          </Route>

        </Switch>

      </div>
    )
  }
}