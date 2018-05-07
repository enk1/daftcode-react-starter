import React, { Component } from "react"
import PropTypes from "prop-types"
import "../styles/Counter.sass"

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentState: this.props.from,
            endState: this.props.to,
            type: this.props.from - this.props.to,
            isCounterRunning: true,
        }
    }

    static propTypes = {
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired,
    }

    onSuccess() {
        this.setState({ color: "#03A9F4" })
        clearInterval(this.interval)
    }

    componentDidMount() {
        if (this.state.type < 0) {
            this.interval = setInterval(() => {
                if (this.state.currentState === this.state.endState) {
                    this.onSuccess()
                }
                if (
                    this.state.currentState !== this.state.endState &&
                    this.state.isCounterRunning
                ) {
                    this.setState({
                        currentState: this.state.currentState - 1,
                    })
                }
            }, 1000)
        } else {
            this.interval = setInterval(() => {
                if (this.state.currentState === this.state.endState) {
                    this.onSuccess()
                }
                if (
                    this.state.currentState !== this.state.endState &&
                    this.state.isCounterRunning
                ) {
                    this.setState({
                        currentState: this.state.currentState + 1,
                    })
                }
            }, 1000)
        }
    }

    render() {
        const { from, to } = this.props
        let x =
            parseInt(this.state.endState) - parseInt(this.state.currentState)
        // console.log(
        //     `${Math.floor(x / (60 * 60 * 24))} days ${Math.floor(
        //         x / (60 * 60)
        //     ) % 24}:${Math.floor((x / 60) % 60)}:${x % 60}`
        // )

        return (
            <div
                className={
                    this.state.isCounterRunning
                        ? "wrap-counter-running"
                        : "wrap-counter-stoped"
                }
            >
                <div className="counter">
                    {`${Math.floor(x / (60 * 60 * 24))} days ${Math.floor(
                        x / (60 * 60)
                    ) % 24}:${Math.floor((x / 60) % 60)}:${x % 60}`}
                </div>
            </div>
        )
    }
}

export default Counter
