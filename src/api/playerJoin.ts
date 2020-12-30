import firebase from "../firebase"
import { Player } from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

interface IPlayerJoin {
    name: string
    id: string
    players: Array<Player>
}

const createPlayer = (name:string) => ({
    name,
    points: 0
})

const playerJoin = ({name, id, players}: IPlayerJoin) => {
    db.collection(collections.GAMES_LIST).doc(id).update({
        players: [...players, createPlayer(name)]
    })
}

export default playerJoin
