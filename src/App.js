import "babel-polyfill"
import { hot } from "react-hot-loader"
import * as React from "react"
import "./styles/theme.sass"

import launch from "./assets/launch.json"
import launchSite from "./assets/launch_site.json"
import rocket from "./assets/rocket.json"
import LaunchDetails from "view/LaunchDetails"

import LaunchesList from "view/LaunchesList"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viewName: "list",
        }

        this.handleLaunchClick = this.handleLaunchClick.bind(this)
        this.handleBackClick = this.handleBackClick.bind(this)
    }

    get activeViewComponent() {
        const { viewName } = this.state

        switch (viewName) {
            case "list":
                return (
                    <LaunchesList
                        onLaunchClick={this.handleLaunchClick}
                    />
                )

            case "details":
                return (
                    <LaunchDetails
                        launch={launch}
                        launchSite={launchSite}
                        rocket={rocket}
                        onBackClick={this.handleBackClick}
                    />
                )

            default:
                return null
        }
    }

    handleLaunchClick() {
        this.setState({ viewName: "details" })
    }

    handleBackClick() {
        this.setState({ viewName: "list" })
    }

    render() {
        return <main>{this.activeViewComponent}</main>
    }
}

export default hot(module)(App)
