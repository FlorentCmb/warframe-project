// Import librairies
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Import styles
import './Header.css'

const Header = () => {

    // Function which change header's styles


    useEffect(() => {
        document.addEventListener("click", e => {
            const url = window.location.href
            let currentPage = url.split('/')
            currentPage = currentPage[currentPage.length - 1]
            console.log(currentPage)
        })
    })

    return (
        <div className="Header">
            <Link className="Header-Link" to="/"><span className="Header-Text">Home</span></Link>
            <Link className="Header-Link" to="/warframes"><span className="Header-Text">Warframes</span></Link>
            <Link className="Header-Link" to="/weapons"><span className="Header-Text">Weapons</span></Link>
            <Link className="Header-Link" to="/mods"><span className="Header-Text">Mods</span></Link>
        </div>
    )
}

export default Header