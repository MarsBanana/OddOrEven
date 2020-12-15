import React, {useState, useRef} from "react"
import {Button, List, ListInput, Popup} from "framework7-react"

const popupCustomStyle = {
    maxHeight: "180px",
    marginTop: "-120px",
}

const NameForm: React.FC = () => {
    const [isNameFormOpen, setIsNameFormOpen] = useState<boolean>(true)

    const nameRef = useRef<any>(null)

    const handleConfirm = () => {
        setIsNameFormOpen(false)
        const name = nameRef.current.__reactRefs.inputEl.value
        console.log(name)
    }

    return (
        <Popup closeByBackdropClick={false} opened={isNameFormOpen} style={popupCustomStyle}>
            <List inlineLabels>
                <ListInput
                    ref={nameRef}
                    type="text"
                    label="Name"
                    placeholder="Your name"
                    autofocus
                    clearButton
                />
            </List>
            <Button onClick={handleConfirm}>Confirm Name</Button>
        </Popup>
    )
}

export default NameForm
