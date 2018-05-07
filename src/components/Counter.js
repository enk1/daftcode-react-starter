import React, { Component } from "react"
import PropTypes from "prop-types"

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentState: this.props.from,
            endState: this.props.to,
            color: "",
            type: this.props.from - this.props.to,
            isCounterRunning: true,
            progressBarStatus: 0,
        }
        this.toogleTimer = this.toogleTimer.bind(this)
    }

    static propTypes = {
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired,
    }

    onSuccess() {
        this.setState({ color: "#03A9F4" })
        clearInterval(this.interval)
    }

    progressBarMove() {
        const step = 100 / Math.abs(this.state.type)
        let progress = parseFloat(this.state.progressBarStatus) + step
        this.setState({ progressBarStatus: `${progress}` })
    }

    toogleTimer() {
        this.setState(prevState => ({
            isCounterRunning: !prevState.isCounterRunning,
        }))
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
                    this.setState({ currentState: this.state.currentState + 1 })
                    this.progressBarMove()
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
                    this.setState({ currentState: this.state.currentState - 1 })
                    this.progressBarMove()
                }
            }, 1000)
        }
    }

    render() {
        const { from, to } = this.props
        if (this.state.currentState < 10) {
            return (
                <main>
                    <div
                        className={
                            this.state.isCounterRunning
                                ? "wrap-counter-running"
                                : "wrap-counter-stoped"
                        }
                        style={{ backgroundColor: this.state.color }}
                        onClick={this.toogleTimer}
                    >
                        <div className="header">{`Counting from ${from} to ${to}:`}</div>
                        <div className="counter">
                            00:0{this.state.currentState}
                        </div>
                    </div>
                    <div
                        className="progressBar"
                        style={{ width: `${this.state.progressBarStatus}%` }}
                    />
                </main>
            )
        } else if (this.state.currentState < 60) {
            return (
                <main>
                    <div
                        className={
                            this.state.isCounterRunning
                                ? "wrap-counter-running"
                                : "wrap-counter-stoped"
                        }
                        style={{ backgroundColor: this.state.color }}
                        onClick={this.toogleTimer}
                    >
                        <div className="header">{`Counting from ${from} to ${to}:`}</div>
                        <div className="counter">
                            00:{this.state.currentState}
                        </div>
                    </div>
                    <div
                        className="progressBar"
                        style={{ width: `${this.state.progressBarStatus}%` }}
                    />
                </main>
            )
        } else if (this.state.currentState % 60 < 10) {
            return (
                <main>
                    <div
                        className={
                            this.state.isCounterRunning
                                ? "wrap-counter-running"
                                : "wrap-counter-stoped"
                        }
                        style={{ backgroundColor: this.state.color }}
                        onClick={this.toogleTimer}
                    >
                        <div className="header">{`Counting from ${from} to ${to}:`}</div>
                        <div className="counter">
                            0{Math.floor(this.state.currentState / 60)}:0{this
                                .state.currentState % 60}
                        </div>
                    </div>
                    <div
                        className="progressBar"
                        style={{ width: `${this.state.progressBarStatus}%` }}
                    />
                </main>
            )
        } else {
            return (
                <main>
                    <div
                        className={
                            this.state.isCounterRunning
                                ? "wrap-counter-running"
                                : "wrap-counter-stoped"
                        }
                        style={{ backgroundColor: this.state.color }}
                        onClick={this.toogleTimer}
                    >
                        <div className="header">{`Counting from ${from} to ${to}:`}</div>
                        <div className="counter">
                            0{Math.floor(this.state.currentState / 60)}:{this
                                .state.currentState % 60}
                        </div>
                    </div>
                    <div
                        className="progressBar"
                        style={{ width: `${this.state.progressBarStatus}%` }}
                    />
                </main>
            )
        }
    }
}

export default Counter
