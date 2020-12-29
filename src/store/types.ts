import {CREATE_GAME_PARAMS} from "../api/types"

export enum actionTypes {
    SAVE_NAME = "SAVE_NAME",
    CREATE_GAME = "CREATE_GAME",
    FETCH_GAMES_LIST = "FETCH_GAMES_LIST",
    ADD_GAMES_LIST = "ADD_GAMES_LIST",
    SAVE_CURRENT_ID = "SAVE_CURRENT_ID"
}

export type GameData = {
    gameName: string
    playersAmount: number
    isStarted: boolean
}

export type Game = {
    id: string
    data: GameData
}

export interface IState {
    name: string | null
    gameName: string | null
    playersAmount: number | null
    gamesList: Array<Game>
    currentId: string | null
}

export interface SaveNameAction {
    type: typeof actionTypes.SAVE_NAME
    payload: string
}

export interface CreateGameAction {
    type: typeof actionTypes.CREATE_GAME
    payload: CREATE_GAME_PARAMS
}

export interface FetchGamesListAction {
    type: typeof actionTypes.FETCH_GAMES_LIST
}

export interface AddGamesList {
    type: typeof actionTypes.ADD_GAMES_LIST,
    payload: Array<Game>
}

export interface SaveCurrentId {
    type: typeof actionTypes.SAVE_CURRENT_ID
    payload: string
}

export type ActionTypes = SaveNameAction | CreateGameAction | FetchGamesListAction | AddGamesList | SaveCurrentId