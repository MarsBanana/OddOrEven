import firebase from "../firebase"
import { phaseTypes, Player } from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

interface IPlayerJoin {
    playerName: string
    id: string
    players: Array<Player>
    playersAmount: number
}

const createPlayer = (playerName:string) => ({
    playerName,
    points: 0
})

const playerJoin = ({playerName, id, players, playersAmount}: IPlayerJoin) => {

    const startGameData = {
        players: [...players, createPlayer(playerName)],
        currentMove: {
            index: 0,
            playerName: players[0].name,
            phase: phaseTypes.PICK
        },
        isStarted: true
    }

    const continuePlayersWaiting = {
        players: [...players, createPlayer(playerName)]
    }

    const data = players.length + 1 === playersAmount ? startGameData : continuePlayersWaiting
    
    db.collection(collections.GAMES_LIST).doc(id).update(data)
}

export default playerJoin
