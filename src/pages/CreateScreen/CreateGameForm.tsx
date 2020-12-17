import {Block, List, ListInput, Button, Range, BlockTitle} from "framework7-react"
import React, {useRef, useState} from "react"
import {useDispatch} from "react-redux"
import {createGame} from "../../store/actions"

const blockCustomStyle = {
    marginTop: "40vh",
    maxWidth: "40%",
    marginLeft: "30%",
}

const blockTitleCustomStyle = {
    marginLeft: "calc(50% - 65px)",
    maxWidth: "130px",
}

const CreateGameForm: React.FC = () => {
    const dispatch = useDispatch()
    const [playersAmount, setPlayersAmount] = useState(2)
    const nameRef = useRef<any>(null)
    const handleConfirm = () => {
        const name = nameRef.current.__reactRefs.inputEl.value
        try {
            if (!name) {
                throw new Error("Empty string")
            }
            dispatch(createGame(name, playersAmount))
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
                <Block>
                    <BlockTitle style={blockTitleCustomStyle}>Amount of players</BlockTitle>
                    <Range
                        onRangeChange={setPlayersAmount}
                        min={2}
                        max={10}
                        label={true}
                        step={1}
                        value={playersAmount}
                        scale={true}
                        scaleSteps={8}
                    />
                </Block>
            </List>
            <Button onClick={handleConfirm}>Create</Button>
        </Block>
    )
}

export default CreateGameForm
