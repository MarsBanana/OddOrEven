import firebase from "../firebase"
import { GameData } from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

interface IConnectToGame {
    id: string,
    update: (game: GameData) => void
}

const connectToGame = ({id, update}: IConnectToGame) => {
    const disconnect = db.collection(collections.GAMES_LIST).doc(id)
        .onSnapshot(
            (doc) => {
                const data = doc.data()
                data && update(data as GameData)
                console.log("CONNECT")
            }
        )
    return disconnect
}

export default  connectToGame