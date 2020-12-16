import React from "react"
import FormTemplate from "../../components/FormTemplate"
import {createGame} from "../../store/actions"

const formCustomStyle = {
    marginTop: "40vh",
    maxWidth: "40%",
    marginLeft: "30%",
}

const CreateGameForm: React.FC = () => {
    return (
        <FormTemplate
            save={createGame}
            label="Name your game"
            placeholder="Name"
            buttonName="Create"
            style={formCustomStyle}
        />
    )
}

export default CreateGameForm
