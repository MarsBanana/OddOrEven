import React from "react"
import FormTemplate from "../../components/FormTemplate"

const formCustomStyle = {
    marginTop: "40vh",
    maxWidth: "40%",
    marginLeft: "30%",
}

const CreateGameForm: React.FC = () => {
    return (
        <FormTemplate
            save={() => {}}
            label="Name your game"
            placeholder="Name"
            buttonName="Create"
            style={formCustomStyle}
        />
    )
}

export default CreateGameForm
