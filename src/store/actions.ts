import {actionTypes,ActionTypes, Game} from "./types"

export const saveName = (name: string): ActionTypes => ({
    type: actionTypes.SAVE_NAME,
    payload: name
})

export const createGame = (gameName: string, playersAmount: number): ActionTypes => ({
    type: actionTypes.CREATE_GAME,
    payload: {
        gameName,
        playersAmount
    }
})

export const fetchGamesList = (): ActionTypes => ({
    type: actionTypes.FETCH_GAMES_LIST
})

export const addGamesList = (games: Array<Game>): ActionTypes => ({
    type: actionTypes.ADD_GAMES_LIST,
    payload: games
})

export const saveCurrentId = (id: string): ActionTypes => ({
    type: actionTypes.SAVE_CURRENT_ID,
    payload: id
})
