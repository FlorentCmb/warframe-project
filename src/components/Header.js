// Import librairies
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Import styles
import './Header.css'

const Header = () => {

    // Function which change header's styles


    useEffect(() => {
        let changeColor = setInterval(() => {
            const url = window.location.href
            // let currentPage = url.split('/')
            // currentPage = currentPage[currentPage.length - 1]
            switch (true) {
                case url.includes('warframes'):
                    document.querySelector('.Header').classList.remove('Default-Theme')
                    document.querySelector('.Header').classList.remove('Blue-Theme')
                    document.querySelector('.Header').classList.add('Red-Theme')
                    // Add a class for Mods page ?
                    break
                case url.includes('weapons'):
                    document.querySelector('.Header').classList.remove('Default-Theme')
                    document.querySelector('.Header').classList.remove('Red-Theme')
                    document.querySelector('.Header').classList.add('Blue-Theme')
                    // Add a class for Mods page ?
                    break
                default:
                    document.querySelector('.Header').classList.remove('Blue-Theme')
                    document.querySelector('.Header').classList.remove('Red-Theme')
                    document.querySelector('.Header').classList.add('Default-Theme')
                    // Add a class for Mods page ?
                    break
            }
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