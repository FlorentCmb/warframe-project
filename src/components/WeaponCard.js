// Import librairies
import React from 'react'
import { Link } from 'react-router-dom'

// Import styles
import './WeaponCard.css'

// Function giving animation to special weapons
const specialWeaponAnimation = name => {
    if (name.includes('Kuva')) {
        return 'Kuva'
    }
    else if (name.includes('Wraith')) {
        return 'Wraith'
    }
    else if (name.includes('Prisma')) {
        return 'Prisma'
    }
    else if (name.includes('Vandal')) {
        return 'Vandal'
    }
    else if (name.includes('Prime')) {
        return 'Prime'
    }
    else {
        return ''
    }
}

const WeaponCard = ({ weapon }) => {

    return (
        <Link className={`Weapon-Card ${specialWeaponAnimation(weapon.name)}`} >
            <img className="Weapon-Img" src={`./img/${weapon.imageName}`} alt={weapon.name} />
            <p className="Card-Text">{weapon.name} ({weapon.type})</p>
            <p className="Card-Desc">{weapon.description}</p>
        </Link>
    )
}
export default WeaponCard