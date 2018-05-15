import React, { Component } from "react"
import "../styles/Footer.sass"

class Footer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <footer className="footer">
                <div className="media">
                    <span>Follow</span> <a href="#">SpaceX</a>{" "}
                    <a href="#">Twitter</a>
                    <a href="#">Youtube</a> <a href="#">Flickr</a>
                    <a href="#">Instagram</a>
                </div>
                <div className="copyright">
                    2018 Space Exploration Technologies Corp.
                </div>
            </footer>
        )
    }
}

export default Footer
