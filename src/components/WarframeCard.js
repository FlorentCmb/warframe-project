
import React, { useState, useEffect } from 'react';

import './WarframeCard.css'; 


const WarframeCard = ({warframe}) => {
    return (
        <div className="Warframe-Card">
            <h1>{warframe.name}</h1>
            <img  className="Warframe-Img" src ={`./img/${warframe.imageName}`} alt={warframe.name}/>
        </div>
    )
}

export default WarframeCard
