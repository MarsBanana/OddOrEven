import React from "react"
import {Link, f7} from "framework7-react"

const customLinkStyle = {
    marginLeft: "calc(50% - 32px)",
}

const GoBack: React.FC<{center?: boolean}> = ({center}) => (
    <Link style={center ? customLinkStyle : {}} onClick={() => f7.views.main.router.back()}>
        GO BACK
    </Link>
)

export default GoBack
