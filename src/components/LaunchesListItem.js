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
                <div className="launchesList__date">{date}</div>
                <div className="launchesList__underline"> </div>
                <div className="launchesList__information">
                    <span className="launchesList__key">Name: </span>{" "}
                    <span className="launchesList__nameValue">
                        {launch.rocket.rocket_name}
                    </span>
                    <span className="launchesList__key">| Launch site: </span>{" "}
                    <span className="launchesList__siteValue">
                        {launch.launch_site.site_name_long}
                    </span>
                </div>
            </div>
        )
    }
}

export default LaunchesListItem
