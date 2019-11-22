// Import librairies
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './screen/Home'


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
    
    console.log(this.state.warframeDatas)

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