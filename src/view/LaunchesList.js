import React, { Component } from "react"
import "./LaunchDetails.sass"
import { format, toUpper } from "date-fns"
import "./LaunchesList.sass"
import Footer from "../components/Footer"
import Filters from "../components/Filters"
import LaunchesListItem from "../components/LaunchesListItem"

class LaunchesList extends Component {
    constructor() {
        super()
        this.state = {
            rocketNameFilter: null
        }
    }
    get availableRocketNames() {
        const { launches } = this.props
        const rocketNames = []

        return rocketNames
    }

    get filteredLaunches() {
        const { rocketNameFilter } = this.state
        const { launches } = this.props
        if (!rocketNameFilter) return launches

        return launches.filter(
            launch => launch.rocket.rocket_name === rocketNameFilter
        )
    }

    handleFilterChange(value) {
        this.setState({ rocketNameFilter: value })
    }
    render() {
        return (
            <div className="launchesList">
                <header className="launchesList__header">
                    <figure className="launchesList__logo">
                        <img
                            src={require("../assets/space_x_logo_bw_centered.png")}
                        />
                        <figcaption>Launches 2018</figcaption>
                    </figure>
                    <Filters />
                </header>
                <main className="launchesList__main">
                    {this.filteredLaunches.map((launch, index) => (
                        <LaunchesListItem
                            launch={launch}
                            key={launch.flight_number}
                            id={index}
                        />
                    ))}
                </main>
                <Footer />
            </div>
        )
    }
}

export default LaunchesList