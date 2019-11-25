// Import librairies
import React from 'react'

// Import styles
import './WeaponCard.css'

export default class WeaponCard extends React.Component {

    typeOfWeapon = (index) => {
        const principal = this.props.arraysLength[0]
        const secondary = this.props.arraysLength[0] + this.props.arraysLength[1]
        if (index < principal) {
            return "Primary"
        }
        else if (index >= principal && index < secondary) {
            return "Secondary"
        }
        else {
            return "Melee"
        }
    }

    render() {

        const { weapon } = this.props

        return (
            <div className="Weapon-Card">
                <p>{weapon.name}</p>
                <p>{this.typeOfWeapon(this.props.currentIndex)}</p>
            </div>
        )
    }
}
