// Librairies
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Styles
import './WarframeCard.css' 


const WarframeCard = ({warframe}) => {
    return (
        <Link to={`/warframes/${warframe.name}`} className="Warframe-Card">
            <img  className="Warframe-Card-Img" src ={`../img/${warframe.imageName}`} alt={warframe.name}/>
            <p className="Warframe-Card-Name">{warframe.name}</p>
        </Link>
    )
}

export default WarframeCard
