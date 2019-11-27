// Import librairies
import React, { useState, useEffect } from 'react'

// Import screens & components
import WeaponCard from '../components/WeaponCard'

// Import styles
import './WeaponsList.css'

const Weapons = () => {

    // Initializing states
    const [weapons, setweapons] = useState(null)
    const [isReady, setisReady] = useState(false)
    const [inputValue, setinputValue] = useState('')
    const [filter, setfilter] = useState(null)

    // Function which allow us to import JSON and use it
    const getWeapons = async () => {
        // Require weapons db
        const primary = await require('warframe-items/data/json/Primary.json')
        const secondary = await require('warframe-items/data/json/Secondary.json')
        const melee = await require('warframe-items/data/json/Melee.json')

        // Change the state values
        setweapons(primary.concat(secondary, melee))
        setisReady(true)
    }

    // Function changing input's value, and filter weapons
    const handleInput = (e) => {
        // Change state's value
        setinputValue(e.target.value)
        // Filter the weapon's state
        const filteredArray = weapons.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setfilter(filteredArray)
    }

    // Function getting the select value
    const handleSelect = (e) => {
        // Filter the weapon's state
        if (e.target.value !== "All") {
            const filteredArray = weapons.filter(item => item.type === e.target.value)
            setfilter(filteredArray)
        }
        else {
            setfilter(weapons)
        }
    }

    // Equal to componentDidMount
    useEffect(() => {
        getWeapons()
    }, [])

    return (
        <div>
            <div className="Weapon-Filter">
                <input type="text" value={inputValue} onChange={handleInput} placeholder="Search a weapon" />
                <select onChange={handleSelect}>
                    <option value={null}>All</option>
                    <option value="Rifle">Rifles</option>
                    <option value="Shotgun">Shotguns</option>
                    <option value="Crossbow">Crossbows</option>
                    <option value="Bow">Bows</option>
                    <option value="Speargun">Spearguns</option>
                    <option value="Sniper Rifle">Sniper Rifles</option>
                    <option value="Launcher">Launchers</option>
                    <option value="Pistol">Pistols</option>
                    <option value="Dual Pistols">Dual Pistols</option>
                    <option value="Dual Shotguns">Dual Shotguns</option>
                    <option value="Shotgun Sidearm">Shotgun Sidearms</option>
                    <option value="Thrown">Throwns</option>
                    <option value="Glaive">Glaives</option>
                    <option value="Sword and Shield">Swords and Shields</option>
                    <option value="Staff">Staffs</option>
                    <option value="Scythe">Scythes</option>
                    <option value="Fist">Fists</option>
                    <option value="Hammer">Hammers</option>
                    <option value="Whip">Whips</option>
                    <option value="Tonfa">Tonfas</option>
                    <option value="Sword">Swords</option>
                    <option value="Polearm">Polearms</option>
                    <option value="Dagger">Daggers</option>
                    <option value="Rapier">Rapiers</option>
                    <option value="Dual Swords">Dual Swords</option>
                    <option value="Nikana">Nikanas</option>
                    <option value="Dual Daggers">Dual Daggers</option>
                    <option value="Heavy Blade">Heavy Blades</option>
                    <option value="Machete">Machetes</option>
                    <option value="Warfan">Warfans</option>
                    <option value="Sparring">Sparrings</option>
                    <option value="Blade and Whip">Blades and Whips</option>
                    <option value="Nunchaku">Nunchakus</option>
                    <option value="Gunblade">Gunblades</option>
                    <option value="Claws">Claws</option>
                    <option value="Two-Handed Nikana">Two-Handed Nikana</option>
                </select>
            </div>
            <div className="Weapon-Page">
                {isReady ? filter === null ? weapons.map((item, index) => <WeaponCard weapon={item} key={index} />) : filter.map((item, index) => <WeaponCard weapon={item} key={index} />) : "Loading"}
            </div>
        </div>
    )

}

export default Weapons