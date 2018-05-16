import React, { Component } from "react"
import "../styles/Filters.sass"

class Filters extends Component {
    constructor(props) {
        super(props)
    }
    clearButtonsHighlight() {
        let buttons = document.querySelectorAll(".filters__button")
        buttons.forEach(button => (button.className = "filters__button"))
    }
    changeRocketFilter(e) {
        this.clearButtonsHighlight()
        e.target.className = "filters__button filters__button--active"
    }

    render() {
        return (
            <nav className="filters">
                <a
                    className="filters__button"
                    key="10"
                    onClick={e => {
                        this.props.onChange("", e)
                        this.changeRocketFilter(e)
                    }}
                    id="all"
                >
                    All rockets
                </a>
                {this.props.rocketTypes.map((rocket, i) => {
                    return (
                        <a
                            className="filters__button"
                            key={i}
                            id={rocket}
                            onClick={e => {
                                this.props.onChange(rocket, e)
                                this.changeRocketFilter(e)
                            }}
                        >
                            {rocket}
                        </a>
                    )
                })}
            </nav>
        )
    }
}

export default Filters
