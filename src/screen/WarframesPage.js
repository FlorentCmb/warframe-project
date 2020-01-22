// Librairies
import React, { useState, useEffect } from 'react'

// Screens & components
import WarframeCard from '../components/WarframeCard'

// Styles
import './WarframesPage.css'

const WarframeList = () => {
    const [listFrame, setlistFrame] = useState([])
    const [myText, setmyText] = useState("")
    const [filter, setFilter] = useState(null)
    const [isReady, setIsReady] = useState(false)

    // Get all the warframes
    useEffect(() => {
        const fetchData = async () => {
            const waframeN = await require('warframe-items/data/json/Warframes.json')
            setlistFrame(waframeN)
        }
        fetchData("warframe-items/data/json/Warframes.json")
        setIsReady(true)
    }, [])

    // Controlled input
    const handleChange = event => {
        setmyText(event.target.value)
        // We filter the warframe list to get only the warframe which have the input value contained in their name
        setFilter(listFrame.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    return (
        <div className="Warframe-Page">
            <div className="Warframe-Page-Intro">
                <h3>Warframe list</h3>
            </div>
            <div className="Warframe-Page-Filter">
                <label htmlFor="filter">Search a Warframe by its name :</label>
                <input type="text" name="filter" value={myText} onChange={handleChange} />
            </div>
            <div className="Warframe-Page-List">
                {isReady ? filter === null ? listFrame.map((item, index) => <WarframeCard key={index} warframe={item} />) : filter.map((item, index) => <WarframeCard key={index} warframe={item} />) : "Loading.."}
            </div>
        </div>
    )
}

export default WarframeList