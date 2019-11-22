// Import librairies
import React from 'react'

// Require weapons db
const primary = require('warframe-items/data/json/Primary.json')
const secondary = require('warframe-items/data/json/Secondary.json')
const melee = require('warframe-items/data/json/Melee.json')

export default class Weapons extends React.Component {

    state = {
        primary: null,
        secondary: null,
        melee: null,
        weapons: null
    }

    componentDidMount() {
        this.setState({ primary: primary, secondary: secondary, melee: melee })
        this.setState({ weapons: primary })
        console.log('jaaj')
    }

    render() {
        return (
            <div className="Weapon-Page">
                Jaaj
            </div>
        )
    }
}
