// Librairies
import React, { useState, useEffect } from 'react'

// Styles
import './Warframe.css'

const Warframe = () => {

    const [warframe, setwarframe] = useState(null)

    // Get the warframe
    const getWarframe = async () => {
        // Get the name with the url
        const url = window.location.href
        let currentName = url.split('/')
        currentName = currentName[currentName.length - 1]
        // Removing the '%20'
        currentName = currentName.split('%20').join(' ')
        // Get the warframe's informations from the JSON
        const warframes = await require('warframe-items/data/json/Warframes.json')
        let warframeData = warframes.filter(item => item.name === currentName)[0]
        // Set the infos in the state
        setwarframe(warframeData)
    }

    // Return the speed of warframe
    const getSprintSpeed = speed => {
        let speedValue = speed * 7.1
        speedValue = Math.round(speedValue * 100) / 100
        let sprintSpeedValue = speedValue * 1.22
        sprintSpeedValue = Math.round(sprintSpeedValue * 100) / 100
        return `${speed} (${speedValue}m/s, or ${sprintSpeedValue}m/s while sprinting)`
    }

    // Return the abilities
    const getAbilities = () => {
        const abilities = []
        for (let i = 0; i < warframe.abilities.length; i++) {
            abilities.push(<li>{warframe.abilities[i].name} : {warframe.abilities[i].description}</li>)
        }
        return abilities
    }

    // Using the function when the component is ready
    useEffect(() => {
        getWarframe()
    }, [])

    return (
        <div className="Warframe-Page">
            {warframe !== null ? (
                <div className="Warframe">
                    <div>
                        <h3 className="Warframe-Name">{warframe.name}</h3>
                        <p className="Warframe-Desc"><em>{warframe.description}</em></p>
                    </div>
                    <div className="Warframe-Picture">
                        <img src={`../img/${warframe.imageName}`} alt={`${warframe.name} picture`} />
                    </div>
                    <div className="Warframe-Info">
                        <p>{warframe.sex} Warframe</p>
                        <p>Sprint speed : {getSprintSpeed(warframe.sprint)}</p>
                        <p>Polarities : {`${warframe.polarities.length} polarities (${warframe.polarities.join(', ')})`}</p>
                        <div className="Warframe-Stats">
                            <p>Stats :</p>
                            <ul className="Warframe-Stats-List">
                                <li>Health : {warframe.health}</li>
                                <li>Shield : {warframe.shield}</li>
                                <li>Armor : {warframe.armor}</li>
                            </ul>
                        </div>
                        <div className="Warframe-Abilities">
                            <ul>
                                <li><em>Passive : {warframe.passiveDescription}</em></li>
                                {getAbilities()}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : "Loading"}
        </div>
    )
}

export default Warframe
