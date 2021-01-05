import firebase from "../firebase"
import { GameData } from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

interface IConnectToGame {
    currentGameId: string,
    update: (game: GameData) => void
}

const connectToGame = ({currentGameId, update}: IConnectToGame) => {
    const disconnect = db.collection(collections.GAMES_LIST).doc(currentGameId)
        .onSnapshot(
            (doc) => {
                const data = doc.data()
                data && update(data as GameData)
            }
        )
    return disconnect
}

export default  connectToGame