import firebase from "../firebase"
import {CREATE_GAME_PARAMS} from "./types"
import {collections,configConstants} from "./constants"
import remoteConfig from "../remoteConfig"

const db = firebase.firestore()

const createGame = (params: CREATE_GAME_PARAMS): Promise<string | void> => {

    const idPromise = remoteConfig
        .fetchAndActivate()
        .then(() => remoteConfig.getNumber(configConstants.ROUNDS))
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

    return idPromise
}

export default createGame
