import firebase from "../firebase"
import { phaseTypes, Player } from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

interface IPlayerJoin {
    playerName: string
    currentGameId: string
    players: Array<Player>
    playersAmount: number
}

const createPlayer = (name:string) => ({
    name,
    points: 0
})

const playerJoin = ({playerName, currentGameId, players, playersAmount}: IPlayerJoin) => {

    const startGameData = (players: Array<Player>) => ({
        players: [...players, createPlayer(playerName)],
        currentMove: {
            index: 0,
            playerName: players[0].name,
            phase: phaseTypes.PICK
        },
        isStarted: true
    })

    const continuePlayersWaiting = {
        players: [...players, createPlayer(playerName)]
    }

    const data = players.length + 1 === playersAmount ? startGameData(players) : continuePlayersWaiting
    
    db.collection(collections.GAMES_LIST).doc(currentGameId).update(data)
}

export default playerJoin
