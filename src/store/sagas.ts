import * as Effects from "redux-saga/effects"
import {CreateGameAction, actionTypes, SaveCurrentIdAction, GameData} from "./types"
import api from "../api"
import {addGamesList, saveCurrentId, updateGameState, saveDisconnect} from "./actions"
import { useDispatch } from "react-redux"

const call: any = Effects.call
const {takeLatest, all, put, select} = Effects

function* sagas() {
    yield all([
        takeLatest(actionTypes.CREATE_GAME, createGame),
        takeLatest(actionTypes.FETCH_GAMES_LIST, fetchGamesList),
        takeLatest(actionTypes.SAVE_CURRENT_ID, onIdChange),
        takeLatest(actionTypes.QUIT_GAME, quitGame)
    ])
}

function* createGame(action: CreateGameAction) {
    try {
        const id = yield api.createGame(action.payload)
        yield put(saveCurrentId(id))
    } catch (e) {
        yield console.log(e)
    }
}

function* fetchGamesList() {
    try {
        const gamesList = yield call(api.fetchGamesList)
        yield put(addGamesList(gamesList))
    } catch (e) {
        yield console.log(e)
    }
}

function* onIdChange(action: SaveCurrentIdAction) {
    try {
        const id = action.payload

        if (id) {
            const disconnect = yield call(api.connectToGame, {
                id,
                update: (game: GameData | null) => {
                    put(updateGameState(game))
                },
            })
            yield put(saveDisconnect(disconnect))
            
            const name = yield select((state) => state.name)
            const players = yield select((state) => state.currentGame.players)
            yield call(api.playerJoin,{name,id,players})

        } else {
            const disconnect = yield select((state) => state.disconnect)
            yield call(disconnect)
            yield put(saveDisconnect())

            yield put(updateGameState(null))
        }
    } catch (e) {
        yield console.log(e)
    }
}

function* quitGame() {
    try {
        const id = yield select((state) => state.currentId)
        const name = yield select((state) => state.name)
        const players = yield select((state) => state.currentGame.players)

        yield call(api.playerLeave, {name, id, players})

        yield put(saveCurrentId())

    } catch (e) {
        console.log(e)
    }
}

export default sagas
