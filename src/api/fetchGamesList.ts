import firebase from "../firebase"

const db = firebase.firestore()

const fetchGamesList = (callback: (any:any[]) => void) => {
    db.collection("games").get()
        .then((snapshot) => {
            let gamesList: any[] = []
            snapshot.forEach((doc) => {
                gamesList.push({
                    data: doc.data(),
                    id: doc.id
                })
            })
            return callback(gamesList)
        })
}

export default fetchGamesList