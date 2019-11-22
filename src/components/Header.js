// Import librairies
import React from 'react'
// import { Link } from 'react-router-dom'

// Import styles
import './Header.css'

export default class Header extends React.Component {

    render() {
        return(
            <div className="Header">
                <a className="Header-Link" href="/"><span className="Header-Text">Home</span></a>
                <a className="Header-Link" href="/warframes"><span className="Header-Text">Warframes</span></a>
                <a className="Header-Link" href="/weapons"><span className="Header-Text">Weapons</span></a>
                <a className="Header-Link" href="/mods"><span className="Header-Text">Mods</span></a>
            </div>
        )
    }
}