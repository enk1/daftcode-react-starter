import React, { Component } from "react"
import { format, toUpper } from "date-fns"
import "../styles/LaunchesListItem.sass"

class LaunchesListItem extends Component {
    constructor() {
        super()
    }

    render() {
        const { key, launch } = this.props
        const date = format(launch.launch_date_local, "DD MMMM YYYY")

        return (
            <div className="launchesList__item">
                <span className="launchesList__date">{date}</span>
                <hr />
				<span className="launchesList__name">{date}</span>
            </div>
        )
    }
}

export default LaunchesListItem
