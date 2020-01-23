import React from 'react'
import './Home.css'



export default class Home extends React.Component {
    render() {
        return (
            <div className="Home-Page">

                <div className="Home-Section Home-Warframe">
                    HELLO SA MERE
                </div>

                <div className="Home-Banner Home-Background-1" />


                <div className="Home-Section Home-Site">
                    Website Description
                </div>

                <div className="Home-Banner Home-Background-2" />



                <div className="Home-Section Home-Team">
                    <div className="Profil-Florent">
                        Asod - Florent Combeau
                        <img src="../pictures/asod.png" />
                    </div>

                    <div className="Profil-Kevin">
                        Nelo - Kevin Pompelle
                        <img src="../pictures/nelo.png" />
                    </div>

                    <div className="Profil-Cyril">
                        Kenshinobi - Cyril Carral
                        <img src="../pictures/kenshinobi.png" />
                    </div>
                </div>


            </div>
        )
    }
}
