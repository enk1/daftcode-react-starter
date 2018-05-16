import React, { Component } from "react"
import "../styles/Filters.sass"

class Filters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterType: null,
        }
    }
    render() {
        const buttons = this.props.rocketTypes
        return (
            <nav className="filters">
                <a className="filters__button filters__button--active">
                    All rockets
                </a>
                {this.props.rocketTypes.map((rocket, i) => {
                    return (
                        <a className="filters__button" key={i} id={i}>
                            {rocket}
                        </a>
                    )
                })}
            </nav>
        )
    }
}

export default Filters
