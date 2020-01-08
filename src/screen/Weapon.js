// Import librairies
import React, { useState, useEffect } from 'react'

// Styles
import './Weapon.css'

const Weapon = () => {

    // State containing current weapon
    const [weapon, setweapon] = useState(null)


    const getWeaponWithUrl = async () => {
        // Getting weapon from url
        const url = window.location.href
        let currentWeaponName = url.split('/')
        currentWeaponName = currentWeaponName[currentWeaponName.length - 1]
        // Replacing '%20' by ' '
        if (currentWeaponName.includes('%20')) {
            currentWeaponName = currentWeaponName.replace('%20', ' ')
        }

        // Require weapons
        const primary = await require('warframe-items/data/json/Primary.json')
        const secondary = await require('warframe-items/data/json/Secondary.json')
        const melee = await require('warframe-items/data/json/Melee.json')

        // Giving weaponObject the filtered list of all weapons
        const weaponObject = primary.concat(secondary, melee).filter(item => item.name === currentWeaponName)[0]

        // Put weapon properties in the state
        setweapon(weaponObject)
    }

    // Allow to display weapons damages and its percentage
    const displayDmg = () => {
        const damages = []
        for (let [key, value] of Object.entries(weapon.damageTypes)) {
            damages.push(<li>{key} : {value} ({Math.round((value * 100 / weapon.damage) * 100) / 100}%)</li>)
        }
        return (damages)
    }

    useEffect(() => {
        getWeaponWithUrl()
    }, [])


    return (
        <div>
            {weapon !== null ? (
                <div className="Weapon">
                    <div>
                        <h3 className="Weapon-Title">{weapon.name}</h3>
                        <p className="Weapon-Desc">"{weapon.description}"</p>
                    </div>
                    <div className="Weapon-Section">
                        <div className="Weapon-Main-Img">
                            <img src={`../img/${weapon.imageName}`} alt={weapon.name} />
                        </div>
                        <div className="Weapon-Specifications">
                            <p>{weapon.category} weapon ({weapon.type})</p>
                            Default stats of {weapon.name} :
                            <div className="Weapon-Dammage">
                                Damages :
                                <ul>
                                    {displayDmg()}
                                </ul>
                            </div>
                            {/* Add area attack here */}
                            <div className="Weapon-Crit">
                                <p>Crit. rate : {Math.round(weapon.criticalChance * 100 * 100) / 100}%</p>
                                <p>Crit. multiplier : {weapon.criticalMultiplier}</p>
                            </div>
                            <div className="Weapon-Status">
                                <p>Status chance : {Math.round(weapon.procChance * 100 * 100) / 100}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<p>Sorry, an error has occured.</p>)}
        </div>
    )

}
export default Weapon