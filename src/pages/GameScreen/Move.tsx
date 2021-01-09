import React from "react"
import {GameData, phaseTypes} from "../../store/types"
import {Popup} from "framework7-react"
import Guess from "./Guess"
import Pick from "./Pick"

const popupCustomStyle = {
    maxHeight: "180px",
    marginTop: "-120px",
}

const Move: React.FC<{currentGame: GameData; playerName: string}> = ({currentGame, playerName}) => {
    const isPopupOpen = currentGame?.isStarted && currentGame.currentMove?.playerName === playerName

    const renderGuess =
        currentGame.currentMove?.phase === phaseTypes.GUESS &&
        currentGame.currentMove?.playerName === playerName

    const renderPick = currentGame.currentMove?.phase === phaseTypes.PICK

    return (
        <Popup closeByBackdropClick={false} opened={isPopupOpen} style={popupCustomStyle}>
            {renderGuess && <Guess />}
            {renderPick && <Pick />}
        </Popup>
    )
}

export default Move
