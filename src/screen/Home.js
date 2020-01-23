import React from 'react'
import './Home.css'



export default class Home extends React.Component {
    render() {
        return (
            <div className="Home-Page">
                <div className="Home-Section Home-Warframe">
                    <h1>Warframe</h1>
                    <p className="Home-Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
                </div>
                
                <div className="Home-Section Home-Site">
                    <h1>About nous</h1>
                    <p className="Home-Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
                </div>

                <div className="Home-Section Home-Team">
                    <h1>Our partenaires</h1>
                    <p className="Home-Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
                </div>
            </div>
        )
    }
}
