import React from "react"
import {Preloader} from "framework7-react"

const Loader: React.FC = () => (
    <div style={{maxWidth: "32px", marginLeft: "calc(50% - 16px)"}}>
        <Preloader />
    </div>
)

export default Loader
