import React, { useState, useEffect } from 'react';
import WarframeCard from '../components/WarframeCard';

import './WarframePage.css'


// Je déclare ma const ainsi que ma state
const WarframeList = () => {
    const [listFrame, setlistFrame] = useState([])
    const [myText, setmyText] = useState("")
    const [filter, setFilter] = useState(null)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const waframeN = await require('warframe-items/data/json/Warframes.json')
            setlistFrame(waframeN)
        }
        fetchData("warframe-items/data/json/Warframes.json")
        setIsReady(true)
    }, [])


    const handleChange = event => {
        setmyText(event.target.value)
        setFilter(listFrame.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase())))
        console.log(filter)
    }



    return (ll 
        <div className="Warframe-Page">
            <div>
                <input type="text" value={myText} onChange={handleChange} />
            </div>
            {isReady ? filter === null ? listFrame.map(item => <WarframeCard warframe={item}/>) : filter.map(item => <WarframeCard warframe={item}/> ) : "Loading.."}
        </div>
    );
}







export default WarframeList
