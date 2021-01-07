import * as Effects from "redux-saga/effects"
import {CreateGameAction, actionTypes, QuitGameAction, PickNumberAction, GuessAction} from "./types"
import api from "../api"
import {addGamesList, saveCurrentGameId, updateGameState} from "./actions"
import {f7} from "framework7-react"

const call: any = Effects.call
const {takeLatest, all, put, select} = Effects

function* sagas() {
    yield all([
        takeLatest(actionTypes.CREATE_GAME, createGame),
        takeLatest(actionTypes.FETCH_GAMES_LIST, fetchGamesList),
        takeLatest(actionTypes.ENTER_GAME, enterGame),
        takeLatest(actionTypes.QUIT_GAME, quitGame),
        takeLatest(actionTypes.PICK_NUMBER, onPick),
        takeLatest(actionTypes.GUESS, onGuess),
        takeLatest(actionTypes.SAVE_CURRENT_ID, onCurrentGameIdSave),
    ])
}

function* createGame(action: CreateGameAction) {
    try {
        const id = yield api.createGame(action.payload)
        yield put(saveCurrentGameId(id))
        yield f7.views.main.router.navigate("/game/")
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

export function* enterGame() {
    try {
        const playerName = yield select((state) => state.playerName)
        const players = yield select((state) => state.currentGame.players)
        const currentGameId = yield select((state) => state.currentGameId)
        const playersAmount = yield select((state) => state.currentGame.playersAmount)

        yield call(api.playerJoin,{playerName,currentGameId,players,playersAmount})

    } catch (e) {
        console.log(e)
    }
}

function* quitGame(action: QuitGameAction) {
    try {
        const currentGameId = yield select((state) => state.currentGameId)
        const playerName = yield select((state) => state.playerName)
        const players = yield select((state) => state.currentGame.players)

        yield call(api.playerLeave, {playerName, currentGameId, players})

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

function* onCurrentGameIdSave() {
    try {
        yield f7.views.main.router.navigate("/game/")
    } catch (e) {
        console.log(e)
    }
}

export default sagas
