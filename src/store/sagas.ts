import {takeLatest} from "redux-saga/effects"
import { ActionTypes,actionTypes } from "./types";

function *sagas() {
    yield takeLatest(actionTypes.CREATE_GAME,createGame)
}

function *createGame(action:ActionTypes) {
    try {
        yield console.log(action.payload)
    } catch (e) {
        yield console.log(e)
    }
}

export default sagas