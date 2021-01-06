import firebase from "../firebase"
import { MoveData, phaseTypes, Player } from "../store/types"
import { collections } from "./constants"

const db = firebase.firestore()

interface IPickNumber {
    number: number
    players: Array<Player>
    gameId: string
    currentMove: MoveData
    roundsLeft: number
}

const pickNumber = ({number, players, gameId, currentMove, roundsLeft}: IPickNumber) => {

    const newIndex = currentMove.index + 1 === players.length ? 0 : currentMove.index + 1

    const newRoundsLeft = newIndex === 0 ? roundsLeft - 1 : roundsLeft

    const newData = {
        currentMove: {
            index: newIndex,
            playerName: players[newIndex].name,
            phase: phaseTypes.GUESS,
            number
        },
        roundsLeft: newRoundsLeft > 0 ? newRoundsLeft : 1
    }

    db.collection(collections.GAMES_LIST).doc(gameId).update(newData)
}

export default pickNumber