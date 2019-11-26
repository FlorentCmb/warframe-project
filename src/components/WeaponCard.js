// Import librairies
import React from 'react'

// Import styles
import './WeaponCard.css'

const WeaponCard = ({ weapon }) => {

    return (
        <div className="Weapon-Card">
            <p>{weapon.name}</p>
            <p>{weapon.type}</p>
            <img className="Card-Img" src={`./img/${weapon.imageName}`} alt={weapon.name} />
        </div>
    )
}
export default WeaponCard