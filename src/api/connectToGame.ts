import firebase from "../firebase"
import { GameData } from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

interface IConnectToGame {
    id?: string,
    update: (game: GameData) => void
}

const connectToGame = ({id, update}: IConnectToGame) => {
    db.collection(collections.GAMES_LIST).doc(id)
        .onSnapshot(
            (doc) => {
                const data = doc.data()
                data && update(data as GameData)
            }
        )
}

export default  connectToGame