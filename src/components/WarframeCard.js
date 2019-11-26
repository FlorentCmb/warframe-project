
import React, { useState, useEffect } from 'react';


const WarframeCard = ({warframe}) => {
    return (
        <div>
            <h1>{warframe.name}</h1>
            <img src ={`./img/${warframe.imageName}`} alt={warframe.name}/>
        </div>
    )
}

export default WarframeCard
