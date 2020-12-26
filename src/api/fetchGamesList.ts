import firebase from "../firebase"
import { Game, GameData } from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

const fetchGamesList = () => {
    let gamesList: Array<Game> = []
    db.collection(collections.GAMES_LIST)
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                const data = doc.data()
                gamesList.push({id: doc.id, data: (data as GameData)})
            })
            return gamesList
        })
        .catch((err) => {
            console.log(err)
        })
}

export default fetchGamesList
