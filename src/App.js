// Import librairies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Import components & screens
import Home from './screen/Home'
import Warframes from './screen/Warframes'

// Import styles
import './App.css'
import Header from './components/Header'

// Require warframe db
const warframes = require('warframe-items/data/json/Warframes.json')

export default class App extends React.Component {

  state = {
    isReady: false
  }

  componentDidMount() {
    this.setState({ warframeDatas: warframes, isReady: true })
  }
  
  render() {

    return (

      <div className="App">

        <Header />

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/warframes'>
            <Warframes warframes={this.state.warframeDatas} />
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