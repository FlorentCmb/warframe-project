// Import librairies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Import components & screens
import Home from './screen/Home'
import Weapons from './screen/Weapons'

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

          <Route path='/warframes'>
            {/* Warframe */}
          </Route>

          <Route path='/weaponsjaaj'>
            <Weapons />
          </Route>

          <Route>
            {/* Mods */}
          </Route>

        </Switch>

      </div>
    )
  }
}