import firebase from "../firebase"
import {CREATE_GAME_PARAMS} from "./types"
import {collections} from "./constants"

const db = firebase.firestore()

const createGame = (params: CREATE_GAME_PARAMS) => {
    db.collection(collections.GAMES_LIST).add({
        ...params,
        isStarted: false
    })
        .then((docRef) => {console.log(docRef)})
        .catch((err) => {console.log(err)})
}

const api = {createGame}

export default api