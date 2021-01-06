import React from "react"
import {Preloader} from "framework7-react"

const customStyle = {
    maxWidth: "32px",
    marginLeft: "calc(50% - 16px)",
}

const Loader: React.FC = () => (
    <div style={customStyle}>
        <Preloader />
    </div>
)

export default Loader
