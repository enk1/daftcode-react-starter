import { hot } from "react-hot-loader"
import * as React from "react"
import "./styles/theme.sass"
import launch from "./assets/launch.json"
import launchSite from "./assets/launch_site.json"
import rocket from "./assets/rocket.json"
import LaunchDetails from "view/LaunchDetails"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            launch: launch,
            launchSite: launchSite,
            rocket: rocket,
        }
    }

    render() {
        return (
            <main>
                <LaunchDetails
                    launch={launch}
                    launchSite={launchSite}
                    rocket={rocket}
                />
            </main>
        )
    }
}

export default hot(module)(App)
