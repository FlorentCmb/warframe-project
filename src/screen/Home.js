import React from 'react'
import './Home.css'



export default class Home extends React.Component {
    render() {
        return (
            <div className="Home-Page">

                <div className="Home-Section Home-Warframe">
                    <h1>HELLO SA MERE</h1>
                </div>

                <div className="Home-Banner Home-Background-1">
                </div>


                <div className="Home-Section Home-Site">
                    <h2>Website Description</h2>
                </div>

                <div className="Home-Banner Home-Background-2">
                </div>



                <div className="Home-Section Home-Team">
                    <div className="Profil-Florent">
                        <h1>Asod - Florent Combeau</h1>
                        <img src="../pictures/asod.png" />
                    </div>

                    <div className="Profil-Kevin">
                        <h1>Nelo - Kevin Pompelle</h1>
                        <img src="../pictures/nelo.png" />

                    </div>
                </div>
            </div>
        )
    }
}
