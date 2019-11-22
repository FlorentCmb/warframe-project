// Import librairies
import React from 'react'

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

    getARandomWeapon = () => {
        if (this.state.isReady) {
            const min = 0
            const max = this.state.weapons.length
            const random = Math.floor(Math.random() * (max - min + 1))
            document.querySelector('.Weapon-Container').innerHTML = `
            <p>${this.state.weapons[random].name}</p>`
        }
    }

    render() {
        console.log(this.state.weapons)
        return (
            <div className="Weapon-Page" onLoad={this.getARandomWeapon()}>
                <div className="Weapon-Container"></div>
            </div>
        )
    }
}
