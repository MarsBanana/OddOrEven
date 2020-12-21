import firebase from "../firebase"
import {CREATE_GAME_PARAMS} from "./types"

const db = firebase.firestore()

const createGame = (params: CREATE_GAME_PARAMS) => {
    db.collection("games").add({
        ...params,
        isStarted: false
    })
        .then((docRef) => {console.log(docRef)})
        .catch((err) => {console.log(err)})
}

const api = {createGame}

export default api