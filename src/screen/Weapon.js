// Import librairies
import React, { useState, useEffect } from 'react'

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

    useEffect(() => {
        getWeaponWithUrl()
    }, [])


    return (
        <>
            {weapon !== null ? (
                <div>
                    <h3>{weapon.name}</h3>
                    <p>It's a {weapon.category} weapon</p>
                </div>
            ) : ''}
        </>
    )

}
export default Weapon