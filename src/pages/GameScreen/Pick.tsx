import React, {useState} from "react"
import {List, ListInput, Button} from "framework7-react"

const Pick: React.FC = () => {
    const [number, setNumber] = useState<string>("")

    const handleConfirm = () => {
        if (+number) {
            console.log(number)
        }
    }

    return (
        <>
            <List inlineLabels>
                <ListInput
                    onChange={(e) => {
                        setNumber(e.target.value)
                    }}
                    value={number}
                    type="text"
                    label="Number"
                    placeholder="Pick your number"
                    autofocus
                    errorMessage="Only numbers please!"
                    required
                    validate
                    pattern="[0-9]*"
                />
            </List>
            <Button onClick={handleConfirm}>PICK</Button>
        </>
    )
}

export default Pick
