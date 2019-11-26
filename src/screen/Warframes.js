import React, { useState, useEffect } from 'react';
import WarframeCard from '../components/WarframeCard';

import './WarframePage.css'


// Je déclare ma const ainsi que ma state
const WarframeList = () => {
    const [listFrame, setlistFrame] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const waframeN = await require('warframe-items/data/json/Warframes.json')
            setlistFrame(waframeN)
        }
        fetchData("warframe-items/data/json/Warframes.json")

    }, [])



    return (
        <div className="Warframe-Page">
            {listFrame.map(item => <WarframeCard warframe={item}/>)}
        </div>
    );
}








export default WarframeList
