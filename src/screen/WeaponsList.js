// Import librairies
import React, { useState, useEffect } from 'react'

// Import screens & components
import WeaponCard from '../components/WeaponCard'



const Weapons = () => {

    const [weapons, setweapons] = useState(null)
    const [isReady, setisReady] = useState(false)
    // primary.concat(secondary, melee)

    const getWeapons = async () => {
        // Require weapons db
        const primary = await require('warframe-items/data/json/Primary.json')
        const secondary = await require('warframe-items/data/json/Secondary.json')
        const melee = await require('warframe-items/data/json/Melee.json')

        // Change the state values
        setweapons(primary.concat(secondary, melee))
        setisReady(true)
    }

    useEffect(() => {
        getWeapons()
    }, [])

    return (
        <div className="Weapon-Page">
            {isReady ? weapons.map((item, index) => <WeaponCard weapon={item} key={index} />) : "Loading"}
        </div>
    )

}

export default Weapons