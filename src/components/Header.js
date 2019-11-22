// Import librairies
import React from 'react'
import { Link } from 'react-router-dom'

// Import styles
import './Header.css'

export default class Header extends React.Component {

    render() {
        return(
            <div className="Header">
                <Link className="Header-Link" to="/"><span className="Header-Text">Home</span></Link>
                <Link className="Header-Link" to="/warframes"><span className="Header-Text">Warframes</span></Link>
                <Link className="Header-Link" to="/weaponsjaaj"><span className="Header-Text">Weapons</span></Link>
                <Link className="Header-Link" to="/mods"><span className="Header-Text">Mods</span></Link>
            </div>
        )
    }
}