import React from 'react'
import './Home.css'



export default class Home extends React.Component {
    render() {
        return (
            <div className="mainHome">
                <div className="first">
                    <h1>Warframe</h1>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
                </div>
                
                <div className="second">
                    <h1>About nous</h1>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
                </div>

                <div className="third">
                    <h1>Our partenaires</h1>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
                </div>
            </div>
        )
    }
}
