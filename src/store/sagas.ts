import {takeLatest, put,call} from "redux-saga/effects"
import {CreateGameAction, actionTypes, EnterGameAction, GameData, QuitGameAction} from "./types"
import api from "../api"
import {addGamesList, saveCurrentId, updateGameState, saveDisconnect} from "./actions"
import playerJoin from "../api/playerJoin"
import playerLeave from "../api/playerLeave"

function* sagas() {
    yield takeLatest(actionTypes.CREATE_GAME, createGame)
    yield takeLatest(actionTypes.FETCH_GAMES_LIST, fetchGamesList)
    yield takeLatest(actionTypes.ENTER_GAME, enterGame)
    yield takeLatest(actionTypes.QUIT_GAME,quitGame)
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

function* enterGame(action: EnterGameAction) {
    const {game, id, name} = action.payload
    const update = (game: GameData) => put(updateGameState(game))

    try {
        const disconnect =  yield api.connectToGame({id, update})
        yield put(saveDisconnect(disconnect))
        yield game && playerJoin({name,id,players: game.players})
    } catch (e) {
        yield console.log(e)
    }
}

function* quitGame(action: QuitGameAction) {
    const {game,id,name,disconnect} = action.payload

    try {
        yield disconnect && disconnect()
        yield put(updateGameState(null))
        yield game && playerLeave({name,id,players: game.players})
        yield put(saveCurrentId())
        yield put(saveDisconnect())
    } catch (e) {
        yield console.log(e)
    }
}

export default sagas
