import React, { Component } from "react"
import PropTypes from "prop-types"
import "./LaunchDetails.sass"
import { format, toUpper } from "date-fns"

class LaunchDetails extends Component {
    constructor() {
        super()
        this.state = {
            launch: null,
        }
    }
    render() {
        const { launch } = this.props
        const date = format(launch.launch_date_local, "DD MMMM YYYY")

        return (
            <div className="wrapper">
                <nav>
                    <div className="return_arrow">&larr; Go back</div>
                    <div className="logo_image">
                        <img
                            src={require("../assets/space_x_logo_bw_centered.png")}
                        />
                    </div>
                </nav>
                <section className="mission_info">
                    <div className="half_grid">
                        <div className="date_launch">{date}</div>
                        <div className="rocket_name">Rocket name</div>
                        <div className="counter-rocket">Time to start</div>
                        <div className="rocket_logo">
                            <img src="https://images2.imgbox.com/f3/cd/Ub2z4QHa_o.png" />
                        </div>
                    </div>
                    <div className="half_grid">
                        <div className="details_launch">
                            <h4>Details</h4>
                            <hr />
                            <p>lorem ipsum</p>
                        </div>
                        <div className="details_rocket">
                            <h4>Rocket</h4>
                            <hr />
                            <p>lorem ipsum</p>
                        </div>
                        <div className="launch_pad">
                            <h4>Launch Pad</h4>
                            <hr />
                            <p>lorem ipsum</p>
                        </div>
                    </div>
                </section>
                <section className="mission_menu">
                    <div className="mission_content">
                        <h3>Mission links</h3>
                        <nav className="mission_links">
                            <a href="#">Reddit Campaign</a>
                            <a href="#">Presskit</a>
                            <a href="#">Mission video</a>
                        </nav>
                    </div>
                </section>
                <footer>
                    <div className="links-media">
                        <span>Follow</span> <a href="#">SpaceX</a>{" "}
                        <a href="#">Twitter</a>
                        <a href="#">Youtube</a> <a href="#">Flickr</a>
                        <a href="#">Instagram</a>
                    </div>
                    <div className="copyright">
                        2018 Space Exploration Technologies Corp.
                    </div>
                </footer>
            </div>
        )
    }
}
export default LaunchDetails
