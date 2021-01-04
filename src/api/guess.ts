import firebase from "../firebase"
import {MoveData, phaseTypes, Player} from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

interface IGuess {
    players: Array<Player>
    gameId: string
    currentMove: MoveData
    points: number
    roundsLeft: number
}

const guess = ({players, gameId, currentMove, points, roundsLeft}: IGuess) => {
    players[currentMove.index].points += points

    const pointsArr = players.map((player) => player.points)
    const maxPoints = Math.max(...pointsArr)
    const maxPointsArr = pointsArr.map((points) => points === maxPoints)

    const endGame =
        currentMove.index === players.length - 1 && roundsLeft === 1 && maxPointsArr.length === 1

    const newMove = {
        ...currentMove,
        phase: phaseTypes.PICK,
    }

    const newData = {
        currentMove: !endGame ? newMove : undefined,
        players,
        winner: endGame ? players.find((player) => player.points === maxPoints) : undefined
    }

    db.collection(collections.GAMES_LIST).doc(gameId).update(newData)
}

export default guess
