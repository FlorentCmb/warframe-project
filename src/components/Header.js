// Import librairies
import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {

    render() {
        return(
            <div className="Header">
                <Link className="Header-Link" to="/">Home</Link>
            </div>
        )
    }
}