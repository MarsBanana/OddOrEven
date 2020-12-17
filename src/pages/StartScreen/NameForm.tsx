import React, {useState, useRef} from "react"
import {Popup, List, ListInput, Button} from "framework7-react"
import {useDispatch} from "react-redux"
import {saveName} from "../../store/actions"

const popupCustomStyle = {
    maxHeight: "180px",
    marginTop: "-120px",
}

const NameForm: React.FC = () => {
    const [isNameFormOpen, setIsNameFormOpen] = useState<boolean>(true)
    const dispatch = useDispatch()
    const ref = useRef<any>(null)
    const handleConfirm = () => {
        const name = ref.current.__reactRefs.inputEl.value
        try {
            if (!name) {
                throw new Error("Empty string")
            }
            dispatch(saveName(name))
            setIsNameFormOpen(false)
        } catch {
            setIsNameFormOpen(true)
        }
    }
    return (
        <Popup closeByBackdropClick={false} opened={isNameFormOpen} style={popupCustomStyle}>
            <List inlineLabels>
                <ListInput
                    ref={ref}
                    type="text"
                    label="Name"
                    placeholder="Your name"
                    autofocus
                    clearButton
                />
            </List>
            <Button onClick={handleConfirm}>Confirm</Button>
        </Popup>
    )
}

export default NameForm
