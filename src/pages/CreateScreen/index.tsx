import {Page} from "framework7-react"
import React from "react"
import FormTemplate from "../../components/FormTemplate"

const CreateScreen: React.FC = () => {
    return (
        <Page>
            <FormTemplate
                save={() => {}}
                label="Name your game"
                placeholder="Name"
                buttonName="Create"
                style={{
                    marginTop: "40vh",
                    maxWidth: "40%",
                    marginLeft: "30%",
                }}
            />
        </Page>
    )
}

export default CreateScreen
