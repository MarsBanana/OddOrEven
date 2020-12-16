import {actionTypes,ActionTypes} from "./types"

export const saveName = (name: string): ActionTypes => ({
    type: actionTypes.SAVE_NAME,
    payload: name
})

export const createGame = (gameName: string): ActionTypes => ({
    type: actionTypes.CREATE_GAME,
    payload: gameName
})
