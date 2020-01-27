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
                        <div className="Profil-Bulle">
                        <a href="https://github.com/florentCmb" target="_blank"><img src="../pictures/github.png" className="Github"></img></a>
                            <a href="https://www.linkedin.com/in/florent-combeau-51b363172/" target="_blank"><img src="../pictures/linkedin.png" className="Linkedin"></img></a>
                        </div>
                    </div>

                    <div className="Profil-Kevin">
                        Nelo - Kevin Pompelle
                        <img src="../pictures/nelo.png" target="_blank" />
                        <div className="Profil-Bulle">
                           
                        </div>
                    </div>

                    <div className="Profil-Cyril">
                        Kenshinobi - Cyril Carral
                        <img src="../pictures/kenshinobi.png" />
                        <div className="Profil-Bulle">
                            <a href="https://github.com/arsandamus" target="_blank"><img src="../pictures/github.png" className="Github"></img></a>
                            <a href="https://www.linkedin.com/in/cyril-carral-195906147/" target="_blank"><img src="../pictures/linkedin.png" className="Linkedin"></img></a>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
