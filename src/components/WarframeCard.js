
import React, { useState, useEffect } from 'react';

import './WarframeCard.css'; 


const WarframeCard = ({warframe}) => {
    return (
        <div className="Warframe-Card">
            <img  className="Warframe-Card-Img" src ={`./img/${warframe.imageName}`} alt={warframe.name}/>
            <p className="Warframe-Card-Name">{warframe.name}</p>
        </div>
    )
}

export default WarframeCard
