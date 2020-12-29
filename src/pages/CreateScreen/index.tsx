import {Page} from "framework7-react"
import React from "react"
import GoBack from "../../components/GoBack"
import CreateGameForm from "./CreateGameForm"

const CreateScreen: React.FC = () => {
    return (
        <Page>
            <GoBack />
            <CreateGameForm />
        </Page>
    )
}

export default CreateScreen
