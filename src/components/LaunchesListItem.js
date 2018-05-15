import React, { Component } from "react"
import { format, toUpper } from "date-fns"
import "../styles/LaunchesListItem.sass"

class LaunchesListItem extends Component {
    constructor() {
        super()
    }

    render() {
        const { key, launch } = this.props

        return <div className="launchesList__item">a</div>
    }
}

export default LaunchesListItem
