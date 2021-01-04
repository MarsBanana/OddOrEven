import firebase from "../firebase"
import { MoveData, phaseTypes, Player } from "../store/types"
import { collections } from "./constants"

const db = firebase.firestore()

interface IGuess {
    players: Array<Player>
    gameId: string
    currentMove: MoveData
    points: number
}

const guess = ({players, gameId, currentMove, points}: IGuess) => {

    players[currentMove.index].points += points

    const newData = {
        currentMove: {
            ...currentMove,
            phase: phaseTypes.PICK,
        },
        players
    }

    db.collection(collections.GAMES_LIST).doc(gameId).update(newData)
}

export default guess