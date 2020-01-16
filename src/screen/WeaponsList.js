// Import librairies
import React, { useState, useEffect } from 'react'

// Import screens & components
import WeaponCard from '../components/WeaponCard'

// Import styles
import './WeaponsList.css'

const Weapons = () => {

    // Initializing states
    const [weapons, setweapons] = useState(null)
    const [filter, setfilter] = useState(null)
    const [inputValue, setinputValue] = useState('')
    const [isReady, setisReady] = useState(false)

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

    // Equal to componentDidMount, call all weapons
    useEffect(() => {
        getWeapons()
    }, [])

    // Controlled input (filter)
    const handleInput = (e) => {
        setinputValue(e.target.value)
        setfilter(weapons.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    // Scroll listen (test)
    window.addEventListener('scroll', e => {
        let scroll = window.scrollY
        if (scroll > 370) {
            console.log('move the filter')
        }
    })

    return (
        <div className="Weapon-Page">
            <div className="Weapon-Intro">
                <h3>Weapon list</h3>
            </div>
            <div className="Weapon-Filter">
                <label htmlFor="filter">Search a weapon by its name :</label>
                <input type="text" name="filter" value={inputValue} onChange={handleInput} placeholder="Search a weapon" />
            </div>
            <div className="Weapon-List">
                {isReady ? filter === null ? weapons.map((item, index) => <WeaponCard weapon={item} key={index} />) : filter.map((item, index) => <WeaponCard weapon={item} key={index} />) : "Loading"}
            </div>
        </div>
    )

}

export default Weapons