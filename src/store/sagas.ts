import {call,put,takeLatest} from "redux-saga/effects"
import { ActionTypes,actionTypes } from "./types";
import {createGameSuccess} from "./actions"

function *createGame(action:ActionTypes) {
    try {
        yield console.log(action.payload)//put(createGameSuccess(action.payload.gameName,action.payload.playersAmount))
    } catch (e) {
        yield console.log(e)
    }
}

function *sagas() {
    yield takeLatest(actionTypes.CREATE_GAME,createGame)
}

export default sagas