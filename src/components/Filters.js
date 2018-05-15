import React, { Component } from "react"
import "../styles/Filters.sass"

class Filters extends Component {
    constructor() {
        super()
        this.state = {
            launch: null,
        }
    }
    render() {
        return (
            <nav className="filters">
                <a className="filters__button filters__button--active">
                    All rockets
                </a>
                <a className="filters__button">Falcon 9</a>
                <a className="filters__button">Falcon heavy</a>
                <a className="filters__button">Dragon</a>
            </nav>
        )
    }
}

export default Filters
