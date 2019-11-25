// Import librairies
import React from 'react'

// Import screens & components
import WeaponCard from '../components/WeaponCard'


// Require weapons db
const primary = require('warframe-items/data/json/Primary.json')
const secondary = require('warframe-items/data/json/Secondary.json')
const melee = require('warframe-items/data/json/Melee.json')

export default class Weapons extends React.Component {

    state = {
        weapons: null,
        isReady: false
    }

    componentDidMount() {
        this.setState({ weapons: primary.concat(secondary, melee), isReady: true })
    }

    render() {
        return (
            <div className="Weapon-Page">
                {this.state.isReady ? this.state.weapons.map((item, index) => <WeaponCard weapon={item} currentIndex={index} arraysLength={[primary.length, secondary.length, melee.length]} key={index} />) : "Loading"}
            </div>
        )
    }
}
