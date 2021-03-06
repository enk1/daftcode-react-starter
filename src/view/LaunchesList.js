import React, { Component } from "react"
import "./LaunchDetails.sass"
import { format, toUpper } from "date-fns"
import "./LaunchesList.sass"
import Footer from "../components/Footer"
import Filters from "../components/Filters"
import LaunchesListItem from "../components/LaunchesListItem"

class LaunchesList extends Component {
    async componentDidMount() {
        const url = "https://api.spacexdata.com/v2/launches/all"
        const launches = await fetch(url).then(res => res.json())
        this.setState({
            launches,
        })
    }
    constructor() {
        super()
        this.state = {
            rocketNameFilter: null,
            launches: [],
        }
        this.handleFilterChange = this.handleFilterChange.bind(this)
    }
    get availableRocketNames() {
        const { launches } = this.state
        let rocketNames = launches.map(launch => launch.rocket.rocket_name)
        rocketNames = [...new Set(rocketNames)]

        return rocketNames
    }

    get filteredLaunches() {
        const { rocketNameFilter, launches } = this.state
        if (!rocketNameFilter) return launches

        return launches.filter(
            launch => launch.rocket.rocket_name === rocketNameFilter
        )
    }

    handleFilterChange(value, e) {
        this.setState({ rocketNameFilter: value })
    }
    render() {
        //const { launches } = this.state
        return (
            <div className="launchesList">
                <header className="launchesList__header">
                    <figure className="launchesList__logo">
                        <img
                            src={require("../assets/space_x_logo_bw_centered.png")}
                        />
                        <figcaption>Launches 2018</figcaption>
                    </figure>
                    <Filters
                        rocketTypes={this.availableRocketNames}
                        onChange={this.handleFilterChange}
                    />
                </header>
                <main className="launchesList__main">
                    {this.filteredLaunches.map((launch, id) => (
                        <LaunchesListItem
                            //value={launch}
                            //przekazać launchData wybranego flight_number
                            launch={launch}
                            key={launch.flight_number}
                            onLaunchClick={this.props.onLaunchClick(id)}
                        />
                    ))}
                </main>
                <Footer />
            </div>
        )
    }
}

export default LaunchesList
