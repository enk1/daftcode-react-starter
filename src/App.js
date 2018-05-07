import { hot } from "react-hot-loader"
import * as React from "react"
import Counter from "./components/Counter"
import "./styles/theme.sass"

class App extends React.Component {
    render() {
        return <Counter from={7} to={12} />
    }
}

export default hot(module)(App)
