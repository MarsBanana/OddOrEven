import {Block, List, ListInput, Button, Range, BlockTitle} from "framework7-react"
import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {createGame} from "../../store/actions"

const blockCustomStyle = {
    marginTop: "30vh",
    maxWidth: "40%",
    marginLeft: "30%",
}

const blockTitleCustomStyle = {
    marginLeft: "calc(50% - 65px)",
    maxWidth: "130px",
}

const CreateGameForm: React.FC = () => {
    const dispatch = useDispatch()
    const [playersAmount, setPlayersAmount] = useState<number>(2)
    const [gameName, setGameName] = useState<string>("")

    const handleConfirm = () => {
        try {
            if (!gameName) {
                throw new Error("Empty string")
            }

            dispatch(createGame(gameName, playersAmount))
        } catch {}
    }

    return (
        <Block style={blockCustomStyle}>
            <List inlineLabels>
                <ListInput
                    onChange={(e) => {
                        setGameName(e.target.value)
                    }}
                    value={gameName}
                    type="text"
                    label="Name your game"
                    placeholder="Name"
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
