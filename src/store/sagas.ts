import {takeLatest, put} from "redux-saga/effects"
import {CreateGameAction, actionTypes} from "./types"
import api from "../api"
import {addGamesList} from "./actions"

function* sagas() {
    yield takeLatest(actionTypes.CREATE_GAME, createGame)
    yield takeLatest(actionTypes.FETCH_GAMES_LIST, fetchGamesList)
}

function* createGame(action: CreateGameAction) {
    try {
        yield api.createGame(action.payload)
    } catch (e) {
        yield console.log(e)
    }
}

function* fetchGamesList() {
    try {
        const gamesList = yield api.fetchGamesList()
        yield put(addGamesList(gamesList))
    } catch (e) {
        yield console.log(e)
    }
}

export default sagas
