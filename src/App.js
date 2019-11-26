// Import librairies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Import components & screens
import Home from './screen/Home'
import WeaponsList from './screen/WeaponsList'
import Warframes from './screen/Warframes'
import Header from './components/Header'

// Import styles
import './App.css'

const App = () => {

  return (

    <div className="App">

      <Header />

      </Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/warframes'>
            <Warframes />
          </Route>
          <Route path='/weapons'>
            <WeaponsList />
          </Route>
          <Route>
            {/* Mods */}
          </Route>
      </Switch>
    </div>
  )
}

export default App