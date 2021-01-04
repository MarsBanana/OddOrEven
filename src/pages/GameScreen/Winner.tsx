import React from "react"
import {Popup, Button} from "framework7-react"
import {useSelector} from "react-redux"
import {IState, Player} from "../../store/types"
import CenteredText from "../../components/CenteredText"

const popupCustomStyle = {
    maxHeight: "200px",
    marginTop: "-120px",
}

const Winner: React.FC = () => {
    const winner = useSelector<IState, Player | undefined>((state) => state.currentGame?.winner)

    return (
        <Popup closeByBackdropClick={false} opened={!!winner} style={popupCustomStyle}>
            <CenteredText title text={`Game over`} />
            <CenteredText
                title
                text={`${winner?.name} won with ${winner?.points} point${
                    winner?.points !== 1 ? "s" : ""
                }`}
            />
            <CenteredText>
                <Button>Start Screen</Button>
            </CenteredText>
        </Popup>
    )
}

export default Winner
