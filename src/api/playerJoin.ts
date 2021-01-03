import firebase from "../firebase"
import { phaseTypes, Player } from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

interface IPlayerJoin {
    name: string
    id: string
    players: Array<Player>
    playersAmount: number
}

const createPlayer = (name:string) => ({
    name,
    points: 0
})

const playerJoin = ({name, id, players, playersAmount}: IPlayerJoin) => {
    const data = players.length + 1 === playersAmount ? {
        players: [...players, createPlayer(name)],
        currentMove: {
            index: 0,
            name: players[0].name,
            phase: phaseTypes.PICK
        },
        isStarted: true
    } : {
        players: [...players, createPlayer(name)]
    }
    db.collection(collections.GAMES_LIST).doc(id).update(data)
}

export default playerJoin
