import firebase from "../firebase"
import {Game, GameData} from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

interface IConnectToGamesList {
    update: (gamesList: Array<Game>) => void
}

const connectToGamesList = ({update}: IConnectToGamesList) => {
    const disconnect = db.collection(collections.GAMES_LIST).onSnapshot((snapshot) => {

        const gamesList = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data() as GameData,
        }))

        update(gamesList)
    })

    return disconnect
}

export default connectToGamesList
