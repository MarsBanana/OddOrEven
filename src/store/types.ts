import {CREATE_GAME_PARAMS} from "../api/types"

export enum actionTypes {
    SAVE_NAME = "SAVE_NAME",
    CREATE_GAME = "CREATE_GAME",
    FETCH_GAMES_LIST = "FETCH_GAMES_LIST",
    ADD_GAMES_LIST = "ADD_GAMES_LIST",
    SAVE_CURRENT_ID = "SAVE_CURRENT_ID",
    UPDATE_GAME_STATE = "UPDATE_GAME_STATE"
}

export type GameData = {
    gameName: string
    playersAmount: number
    isStarted: boolean
    players: Array<Player>
    movesDone: number
}

export type Player = {
    name: string
    number?: number
    guess?: boolean
    points: number
}

export type Game = {
    id: string
    data: GameData
}

export interface IState {
    name: string | null
    gamesList: Array<Game>
    currentId?: string
    currentGame: GameData | null
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

export interface AddGamesListAction {
    type: typeof actionTypes.ADD_GAMES_LIST,
    payload: Array<Game>
}

export interface SaveCurrentIdAction {
    type: typeof actionTypes.SAVE_CURRENT_ID
    payload?: string
}

export interface UpdateGameStateAction {
    type: typeof actionTypes.UPDATE_GAME_STATE
    payload: GameData | null
}

export type ActionTypes = 
    SaveNameAction |
    CreateGameAction |
    FetchGamesListAction |
    AddGamesListAction |
    SaveCurrentIdAction |
    UpdateGameStateAction