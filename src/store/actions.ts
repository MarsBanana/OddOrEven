import {actionTypes,ActionTypes, Game, GameData} from "./types"

export const saveName = (playerName: string): ActionTypes => ({
    type: actionTypes.SAVE_NAME,
    payload: playerName
})

export const createGame = (gameName: string, playersAmount: number): ActionTypes => ({
    type: actionTypes.CREATE_GAME,
    payload: {
        gameName,
        playersAmount
    }
})

export const updateGamesList = (gamesList: Array<Game>): ActionTypes => ({
    type: actionTypes.UPDATE_GAMES_LIST,
    payload: gamesList
})

export const saveCurrentGameId = (id?: string): ActionTypes => ({
    type: actionTypes.SAVE_CURRENT_ID,
    payload: id
})

export const updateGameState = (game: GameData | null): ActionTypes => ({
    type: actionTypes.UPDATE_GAME_STATE,
    payload: game
})

export const quitGame = (disconnect: () => void): ActionTypes => ({
    type: actionTypes.QUIT_GAME,
    payload: disconnect
})

export const enterGame = (): ActionTypes => ({
    type: actionTypes.ENTER_GAME
})

export const pickNumber = (number: number): ActionTypes => ({
    type: actionTypes.PICK_NUMBER,
    payload: number
})

export const guess = (points: number): ActionTypes => ({
    type: actionTypes.GUESS,
    payload: points
})
