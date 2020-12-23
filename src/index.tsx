import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Framework7 from "framework7/framework7-lite.esm.bundle"
import Framework7React from "framework7-react"
import {Provider} from "react-redux"
import store from "./store/store"
import "framework7/css/framework7.bundle.min.css"

Framework7.use(Framework7React)

ReactDOM.render(
    <Provider store={store}>{React.createElement(App)}</Provider>,
    document.getElementById("root")
)
