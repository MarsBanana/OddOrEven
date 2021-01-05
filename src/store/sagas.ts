import {channel} from "redux-saga"
import * as Effects from "redux-saga/effects"
import {CreateGameAction, actionTypes, QuitGameAction, PickNumberAction, GuessAction} from "./types"
import api from "../api"
import {addGamesList, saveCurrentGameId, updateGameState} from "./actions"
import {f7} from "framework7-react"

const call: any = Effects.call
const {takeLatest, all, put, select, take} = Effects

const updateGameChannel = channel()

function* sagas() {
    yield all([
        takeLatest(actionTypes.CREATE_GAME, createGame),
        takeLatest(actionTypes.FETCH_GAMES_LIST, fetchGamesList),
        takeLatest(actionTypes.ENTER_GAME, enterGame),
        takeLatest(actionTypes.QUIT_GAME, quitGame),
        takeLatest(actionTypes.PICK_NUMBER, onPick),
        takeLatest(actionTypes.GUESS, onGuess),
        watchUpdateGameChannel(),
    ])
}

function* createGame(action: CreateGameAction) {
    try {
        const id = yield api.createGame(action.payload)
        yield put(saveCurrentGameId(id))
        yield call(f7.views.main.router.navigate, "/game/")
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
        const currentGameId = yield select((state) => state.currentGameId)
        const playersAmount = yield select((state) => state.currentGame.playersAmount)

        yield call(api.playerJoin,{name,currentGameId,players,playersAmount})

    } catch (e) {
        console.log(e)
    }
}

function* quitGame(action: QuitGameAction) {
    try {
        const currentGameId = yield select((state) => state.currentGameId)
        const name = yield select((state) => state.name)
        const players = yield select((state) => state.currentGame.players)

        yield call(api.playerLeave, {name, currentGameId, players})

        yield call(action.payload)

        yield put(saveCurrentGameId())
        yield put(updateGameState(null))
    } catch (e) {
        console.log(e)
    }
}

function* onPick(action: PickNumberAction) {
    try {
        const currentGame = yield select((state) => state.currentGame)
        const currentGameId = yield select((state) => state.currentGameId)

        yield call(api.pickNumber,{
            number: action.payload,
            players: currentGame.players,
            currentGameId,
            currentMove: currentGame.currentMove,
            roundsLeft: currentGame.roundsLeft
        })

    } catch (e) {
        console.log(e)
    }
}

function* onGuess(action: GuessAction) {
    try {
        const currentGame = yield select((state) => state.currentGame)
        const currentGameId = yield select((state) => state.currentGameId)

        yield call(api.guess,{
            players: currentGame.players,
            currentGameId,
            currentMove: currentGame.currentMove,
            points: action.payload,
            roundsLeft: currentGame.roundsLeft
        })

    } catch (e) {
        console.log(e)
    }
}

export default sagas
