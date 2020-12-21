import firebase from "../firebase"

const db = firebase.firestore()

const fetchGamesList = () => {
    db.collection("games").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`)
            })
        })
}

export default fetchGamesList