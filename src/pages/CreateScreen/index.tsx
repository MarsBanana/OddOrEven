import {Page, Link, f7} from "framework7-react"
import React from "react"
import CreateGameForm from "./CreateGameForm"

const customLinkStyle = {
    marginLeft: "calc(50% - 32px)",
}

const CreateScreen: React.FC = () => {
    return (
        <Page>
            <CreateGameForm />
            <Link style={customLinkStyle} onClick={() => f7.views.main.router.back()}>
                GO BACK
            </Link>
        </Page>
    )
}

export default CreateScreen
