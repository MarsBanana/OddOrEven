import React, {useState} from "react"
import {Button, List, ListInput, Popup} from "framework7-react"

const popupCustomStyle = {
    maxHeight: "180px",
    marginTop: "-120px",
}

const NameForm: React.FC = () => {
    const [isNameFormOpen, setIsNameFormOpen] = useState<boolean>(true)

    const handleConfirm = () => {
        setIsNameFormOpen(false)
    }

    return (
        <Popup closeByBackdropClick={false} opened={isNameFormOpen} style={popupCustomStyle}>
            <List inlineLabels>
                <ListInput type="text" label="Name" placeholder="Your name" autofocus clearButton />
            </List>
            <Button onClick={handleConfirm}>Confirm Name</Button>
        </Popup>
    )
}

export default NameForm
