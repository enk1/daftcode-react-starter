import React, { Component } from "react"
import PropTypes from "prop-types"
import "./LaunchDetails.sass"
import { format, toUpper } from "date-fns"
import "./LaunchesList.sass"
import Footer from "../components/Footer"

class LaunchesList extends Component {
    constructor() {
        super()
        this.state = {
            launch: null,
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
                    <nav className="launchesList__nav">
                        <a href="#">All rockets</a>
                        <a href="#">Falcon 9</a>
                        <a href="#">Falcon heavy</a>
                        <a href="#">Dragon</a>
                    </nav>
                </header>
                <main className="launchesList__container">s</main>
                <Footer />
            </div>
        )
    }
}

export default LaunchesList
