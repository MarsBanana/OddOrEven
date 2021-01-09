import firebase from "../firebase"
import {MoveData, phaseTypes, Player} from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

interface IGuess {
    players: Array<Player>
    currentGameId: string
    currentMove: MoveData
    points: number
    roundsLeft: number
}

const guess = ({players, currentGameId, currentMove, points, roundsLeft}: IGuess) => {
    players[currentMove.index].points += points

    const pointsArr = players.map((player) => player.points)
    const maxPoints = Math.max(...pointsArr)
    let maxPointsArr: Array<number> = []
    pointsArr.forEach((points) => {
        if (points === maxPoints) maxPointsArr.push(points)
    })

    const endGame =
        currentMove.index === players.length - 1 && roundsLeft === 1 && maxPointsArr.length === 1

    const newMove = {
        ...currentMove,
        phase: phaseTypes.PICK,
    }

    const endGameData = {
        currentMove: null,
        players,
        winner: players.find((player) => player.points === maxPoints),
    }

    const continueGameData = {
        currentMove: newMove,
        players,
    }

    const newData = endGame ? endGameData : continueGameData

    db.collection(collections.GAMES_LIST).doc(currentGameId).update(newData)
}

export default guess
