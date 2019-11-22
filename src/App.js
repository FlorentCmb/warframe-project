// Import librairies
import React from 'react'
import { Switch, Route } from 'react-router-dom'


// Import styles
import './App.css'

export default class App extends React.Component {

  render() {

    return (

      <div className="App">
        {/* Header */}
        <Switch>

          <Route>
            {/* Home */}
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
      
        <div className="page-one">
          <h2>Game</h2>
        </div>

        <div id="page-two">
          <h2>jaj</h2>
        </div>

        <div className="three">
          <h2>La team, le sang</h2>
        </div>
      </div>
    )
  }
}