// Import librairies
import React from 'react'

// Require warframe db
const warframes = require('warframe-items/data/json/Warframes.json')

export default class Warframes extends React.Component {

    state = {
        warframes: null,
        isReady: false
    }

    componentDidMount() {
        this.setState({ warframes: warframes, isReady: true })
    }

    randomWarframe = () => {
        if (this.state.isReady) {
            const min = 0
            const max = this.state.warframes.length - 1
            const randomNumber = Math.floor(Math.random() * (max - min + 1))
            document.querySelector('.randomContainer').innerHTML = `
            <p>${this.state.warframes[randomNumber].name} te nique tes morts</p>
            <img src=${this.state.warframes[randomNumber].imageName} alt=${this.state.warframes[randomNumber].name} />
            `
        }
    }

    render() {

        return(
            <div className="Warframes-Page" onLoad={this.randomWarframe()}>
                <div className="randomContainer"></div>
            </div>
        )
    }
}