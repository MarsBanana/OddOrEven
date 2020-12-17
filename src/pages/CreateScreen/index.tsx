import {Page, Button} from "framework7-react"
import React from "react"
import CreateGameForm from "./CreateGameForm"

const CreateScreen: React.FC = () => {
    return (
        <Page>
            <CreateGameForm />
            <Button>go back</Button>
        </Page>
    )
}

export default CreateScreen
