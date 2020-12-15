import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Framework7 from "framework7/framework7-lite.esm.bundle"
import Framework7React from "framework7-react"
import "framework7/css/framework7.bundle.min.css"

Framework7.use(Framework7React)

ReactDOM.render(React.createElement(App), document.getElementById("root"))
