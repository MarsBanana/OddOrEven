import {takeLatest} from "redux-saga/effects"
import { CreateGameAction,actionTypes } from "./types"
import api from "../api"

function *createGame(action:CreateGameAction) {
    try {
        yield api.createGame(action.payload)
    } catch (e) {
        yield console.log(e)
    }
}

function *sagas() {
    yield takeLatest(actionTypes.CREATE_GAME,createGame)
}

export default sagas