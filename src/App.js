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
      </div>
    )
  }
}