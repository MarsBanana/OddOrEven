import {Button, List, ListInput, Popup} from "framework7-react"

const popupCustomStyle = {
    maxHeight: "180px",
    marginTop: "-120px",
}

const StartScreen = () => {
    return (
        <Popup closeByBackdropClick={false} opened={true} style={popupCustomStyle}>
            <List inlineLabels>
                <ListInput type="text" label="Name" placeholder="Your name" autofocus clearButton />
            </List>
            <Button>Confirm Name</Button>
        </Popup>
    )
}

export default StartScreen
