import React from "react"
import {GameData, phaseTypes} from "../../store/types"
import {Popup} from "framework7-react"
import Guess from "./Guess"
import Pick from "./Pick"

const popupCustomStyle = {
    maxHeight: "180px",
    marginTop: "-120px",
}

const Move: React.FC<{currentGame: GameData; name: string}> = ({currentGame, name}) => {
    return (
        <Popup
            closeByBackdropClick={false}
            opened={currentGame?.isStarted && currentGame.currentMove?.name === name}
            style={popupCustomStyle}
        >
            {currentGame.currentMove?.phase === phaseTypes.GUESS ? <Guess /> : <Pick />}
        </Popup>
    )
}

export default Move
