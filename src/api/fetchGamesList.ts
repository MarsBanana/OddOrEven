import firebase from "../firebase"
import {collections} from "./constants"

const db = firebase.firestore()

const fetchGamesList = () => {
    db.collection(collections.GAMES_LIST).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.data())
            })
        })
}

export default fetchGamesList
