import firebase from "../firebase"
import {CREATE_GAME_PARAMS} from "./types"
import {collections,configConstants} from "./constants"
import remoteConfig from "../remoteConfig"

const db = firebase.firestore()

const createGame = (params: CREATE_GAME_PARAMS) => {

    const id = remoteConfig
        .fetchAndActivate()
        .then(() => remoteConfig.getString(configConstants.ROUNDS))
        .then((roundsLeft) =>
            db
                .collection(collections.GAMES_LIST)
                .add({
                    ...params,
                    isStarted: false,
                    players: [],
                    roundsLeft,
                })
                .then((docRef) => docRef.id)
                .catch((err) => {
                    console.log(err)
                })
        )

    return id
}

export default createGame
