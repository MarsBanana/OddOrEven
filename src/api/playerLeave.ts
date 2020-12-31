import firebase from "../firebase"
import { Player } from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

interface IPlayerLeave {
    name: string
    id: string
    players: Array<Player>
}

const playerLeave = ({name, id, players}: IPlayerLeave) => {
    const index = players.findIndex((player) => player.name === name)
    const newPlayers = [...players.slice(0,index), ...players.slice(index+1,-1)]
    db.collection(collections.GAMES_LIST).doc(id).update({
        players:newPlayers
    })
        .then(() => console.log("leave"))
        .catch((e) => {console.log(e)})
    return {}
}

export default playerLeave