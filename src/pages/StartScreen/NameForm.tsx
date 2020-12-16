import React, {useState} from "react"
import {Popup} from "framework7-react"
import {saveName} from "../../store/actions"
import FormTemplate from "../../components/FormTemplate"

const popupCustomStyle = {
    maxHeight: "180px",
    marginTop: "-120px",
}

const NameForm: React.FC = () => {
    const [isNameFormOpen, setIsNameFormOpen] = useState<boolean>(true)
    return (
        <Popup closeByBackdropClick={false} opened={isNameFormOpen} style={popupCustomStyle}>
            <FormTemplate
                save={saveName}
                onSuccess={() => setIsNameFormOpen(false)}
                onFail={() => setIsNameFormOpen(true)}
                label="Name"
                placeholder="Your name"
                buttonName="Confirm"
            />
        </Popup>
    )
}

export default NameForm
