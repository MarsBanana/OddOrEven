import firebase from "firebase"

const config = {
    apiKey: "AIzaSyA0upxnfs7v9dfD90HsZgv-6U5kJ66qDo8",
    authDomain: "dater-test-game.firebaseapp.com",
    projectId: "dater-test-game",
    storageBucket: "dater-test-game.appspot.com",
    messagingSenderId: "733380718059",
    appId: "1:733380718059:web:4903717c89bbe49244fdae",
    measurementId: "G-4C1MST2TL0",
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()