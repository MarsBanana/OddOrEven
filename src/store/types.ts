import {CREATE_GAME_PARAMS} from "../api/types"

export enum actionTypes {
    SAVE_NAME = "SAVE_NAME",
    CREATE_GAME = "CREATE_GAME",
}

export interface IState {
    name: string | null
    gameName: string | null
    playersAmount: number | null
}

export interface SaveNameAction {
    type: typeof actionTypes.SAVE_NAME
    payload: string
}

export interface CreateGameAction {
    type: typeof actionTypes.CREATE_GAME
    payload: CREATE_GAME_PARAMS
}

export type ActionTypes = SaveNameAction | CreateGameAction