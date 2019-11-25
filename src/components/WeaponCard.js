// Import librairies
import React from 'react'

// Import styles
import './WeaponCard.css'

export default class WeaponCard extends React.Component {
    render() {
        return (
            <div>
                {this.props.weapon.name}
            </div>
        )
    }
}
