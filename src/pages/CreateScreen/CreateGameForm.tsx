import {Block, List, ListInput, Button} from "framework7-react"
import React, {useRef} from "react"
import {useDispatch} from "react-redux"
import {createGame} from "../../store/actions"

const blockCustomStyle = {
    marginTop: "40vh",
    maxWidth: "40%",
    marginLeft: "30%",
}

const CreateGameForm: React.FC = () => {
    const dispatch = useDispatch()
    const nameRef = useRef<any>(null)
    const handleConfirm = () => {
        const name = nameRef.current.__reactRefs.inputEl.value
        try {
            if (!name) {
                throw new Error("Empty string")
            }
            dispatch(createGame(name))
        } catch {}
    }
    return (
        <Block style={blockCustomStyle}>
            <List inlineLabels>
                <ListInput
                    ref={nameRef}
                    type="text"
                    label="Name your game"
                    placeholder="Name"
                    autofocus
                    clearButton
                />
            </List>
            <Button onClick={handleConfirm}>Create</Button>
        </Block>
    )
}

export default CreateGameForm
