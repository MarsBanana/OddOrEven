import {takeLatest} from "redux-saga/effects"
import { CreateGameAction, actionTypes } from "./types"
import api from "../api"

function *createGame(action:CreateGameAction) {
    try {
        yield api.createGame(action.payload)
    } catch (e) {
        yield console.log(e)
    }
}

function *fetchGamesList() {
    try {
        yield api.fetchGamesList((gamesList) => {console.log(gamesList)})
    } catch (e) {
        yield console.log(e)
    }
}

function *sagas() {
    yield takeLatest(actionTypes.CREATE_GAME,createGame)
    yield takeLatest(actionTypes.FETCH_GAMES_LIST,fetchGamesList)
}

export default sagas