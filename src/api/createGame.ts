import firebase from "../firebase"
import {CREATE_GAME_PARAMS} from "./types"
import {collections} from "./constants"

const db = firebase.firestore()

const createGame = (params:CREATE_GAME_PARAMS) => {
    const id = db.collection(collections.GAMES_LIST).add({
        ...params,
        isStarted: false,
        players: [],
        movesDone: 0
    })
        .then((docRef) => docRef.id)
        .catch((err) => {console.log(err)})
    return id
}

export default createGame
