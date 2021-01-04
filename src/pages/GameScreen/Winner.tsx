import React, {useState} from "react"
import {Popup, Button, f7} from "framework7-react"
import {useSelector} from "react-redux"
import {IState, Player} from "../../store/types"
import CenteredText from "../../components/CenteredText"

const popupCustomStyle = {
    maxHeight: "200px",
    marginTop: "-120px",
}

const Winner: React.FC = () => {
    const winner = useSelector<IState, Player | undefined>((state) => state.currentGame?.winner)
    const [isOpen, setIsOpen] = useState<boolean>(true)

    const handleClick = () => {
        setIsOpen(false)
        f7.views.main.router.back()
    }

    return (
        <Popup closeByBackdropClick={false} opened={!!winner && isOpen} style={popupCustomStyle}>
            <CenteredText title text={`Game over`} />
            <CenteredText
                title
                text={`${winner?.name} won with ${winner?.points} point${
                    winner?.points !== 1 ? "s" : ""
                }`}
            />
            <CenteredText>
                <Button onClick={handleClick}>Exit</Button>
            </CenteredText>
        </Popup>
    )
}

export default Winner
