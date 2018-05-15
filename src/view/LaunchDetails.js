import React, { Component } from "react"
import PropTypes from "prop-types"
import "./LaunchDetails.sass"
import { format, toUpper } from "date-fns"
import Counter from "../components/Counter"
import Footer from "../components/Footer"

class LaunchDetails extends Component {
    constructor() {
        super()
        this.state = {
            launch: null,
        }
    }
    render() {
        const { launch, launchSite, rocket } = this.props
        const launchDate = format(launch.launch_date_local, "DD MMMM YYYY")
        const launchDateUnix = launch.launch_date_unix
        let todayDateUnix = Math.round(new Date().getTime() / 1000)

        return (
            <div className="launchDetails">
                <nav className="launchDetails__navigation">
                    <div className="launchDetails__arrow">&larr; Go back</div>
                    <div className="launchDetails__logo">
                        <img
                            src={require("../assets/space_x_logo_bw_centered.png")}
                        />
                    </div>
                </nav>
                <section className="launchInfo">
                    <div className="grid__half">
                        <div className="rocket__dateLaunch">{launchDate}</div>
                        <div className="rocket__name">
                            {launch.launch_site.site_name}
                        </div>
                        <div className="rocket__counter">
                            <Counter from={todayDateUnix} to={launchDateUnix} />
                        </div>
                        <div className="rocket__logo">
                            <img src={launch.links.mission_patch_small} />
                        </div>
                    </div>
                    <div className="grid__half">
                        <div className="details_launch">
                            <h4>Details</h4>
                            <hr />
                            <p>{launch.details}</p>
                        </div>
                        <h4 className="rocket__title">Rocket</h4>
                        <hr />
                        <div className="rocket__container">
                            <div className="rocket__column">
                                <div className="rocket__item">
                                    <span className="rocket__key">Name:</span>
                                    <span className="rocket__value">
                                        {rocket.name}
                                    </span>
                                </div>
                                <div className="rocket__item">
                                    <span className="rocket__key">
                                        Company:
                                    </span>
                                    <span className="rocket__value">
                                        {rocket.company}
                                    </span>
                                </div>
                                <div className="rocket__item">
                                    <span className="rocket__key">Height:</span>
                                    <span className="rocket__value">
                                        {rocket.height.meters}
                                    </span>
                                </div>
                                <div className="rocket__item">
                                    <span className="rocket__key">
                                        Diameter:
                                    </span>
                                    <span className="rocket__value">
                                        {rocket.diameter.meters}
                                    </span>
                                </div>
                                <div className="rocket__item">
                                    <span className="rocket__key">Mass:</span>
                                    <span className="rocket__value">
                                        {rocket.mass.kg}
                                    </span>
                                </div>
                            </div>
                            <div className="rocket__column">
                                <div className="rocket__item">
                                    <span className="rocket__key">
                                        First flight:
                                    </span>
                                    <span className="rocket__value">
                                        {rocket.first_flight}
                                    </span>
                                </div>
                                <div className="rocket__item">
                                    <span className="rocket__key">
                                        Country:
                                    </span>
                                    <span className="rocket__value">
                                        {rocket.country}
                                    </span>
                                </div>
                                <div className="rocket__item">
                                    <span className="rocket__key">
                                        Success rate:
                                    </span>
                                    <span className="rocket__value">
                                        {rocket.success_rate_pct}%
                                    </span>
                                </div>
                                <div className="rocket__item">
                                    <span className="rocket__key">
                                        Cost per launch:
                                    </span>
                                    <span className="rocket__value">
                                        ${rocket.cost_per_launch}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p>{rocket.description}</p>
                        <h4>Launch Pad</h4>
                        <hr />
                        <div className="rocket__container">
                            <div className="rocket__column">
                                <div className="rocket__item">
                                    <span className="rocket__key">Name:</span>
                                    <span className="rocket__value">
                                        {launchSite.full_name}
                                    </span>
                                </div>
                            </div>
                            <div className="rocket__column">
                                <div className="rocket__item">
                                    <span className="rocket__key">
                                        Location:
                                    </span>
                                    <span className="rocket__value">
                                        {launchSite.location.name},{" "}
                                        {launchSite.location.region}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p>{launchSite.details}</p>
                    </div>
                </section>
                <section className="mission">
                    <h3 className="mission__title">Mission links</h3>
                    <nav className="mission__links">
                        <a href="#">Reddit Campaign</a>
                        <a href="#">Presskit</a>
                        <a href="#">Mission video</a>
                    </nav>
                </section>
                <Footer />
            </div>
        )
    }
}
export default LaunchDetails
