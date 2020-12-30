import {Page, Block} from "framework7-react"
import React from "react"
import GoBack from "../../components/GoBack"
import CreateGameForm from "./CreateGameForm"

const CreateScreen: React.FC = () => {
    return (
        <Page>
            <Block style={{marginTop: "30vh"}}>
                <GoBack center />
                <CreateGameForm />
            </Block>
        </Page>
    )
}

export default CreateScreen
