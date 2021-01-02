import {channel} from "redux-saga"
import * as Effects from "redux-saga/effects"
import {CreateGameAction, actionTypes} from "./types"
import api from "../api"
import {addGamesList, saveCurrentId, updateGameState} from "./actions"

const call: any = Effects.call
const {takeLatest, all, put, select, take} = Effects

const updateGameChannel = channel()

function* sagas() {
    yield all([
        takeLatest(actionTypes.CREATE_GAME, createGame),
        takeLatest(actionTypes.FETCH_GAMES_LIST, fetchGamesList),
        takeLatest(actionTypes.ENTER_GAME, enterGame),
        takeLatest(actionTypes.QUIT_GAME, quitGame),
        watchUpdateGameChannel(),
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

export function* watchUpdateGameChannel() {
    while (true) {
      const action = yield take(updateGameChannel)
      yield put(action)
    }
  }

export function* enterGame() {
    try {
        const name = yield select((state) => state.name)
        const players = yield select((state) => state.currentGame.players)
        const id = yield select((state) => state.currentId)

        yield call(api.playerJoin,{name,id,players})

    } catch (e) {
        console.log(e)
    }
}

function* quitGame() {
    try {
        const id = yield select((state) => state.currentId)
        const name = yield select((state) => state.name)
        const players = yield select((state) => state.currentGame.players)

        yield call(api.playerLeave, {name, id, players})

        yield put(saveCurrentId())
        yield put(updateGameState(null))
    } catch (e) {
        console.log(e)
    }
}

export default sagas
