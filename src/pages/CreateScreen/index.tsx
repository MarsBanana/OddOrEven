import {Page, Block} from "framework7-react"
import React from "react"
import GoBack from "../../components/GoBack"
import CreateGameForm from "./CreateGameForm"

const blockCustomStyle = {marginTop: "30vh"}

const CreateScreen: React.FC = () => {
    return (
        <Page>
            <Block style={blockCustomStyle}>
                <GoBack center />
                <CreateGameForm />
            </Block>
        </Page>
    )
}

export default CreateScreen
