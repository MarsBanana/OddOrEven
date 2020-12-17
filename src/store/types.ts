export enum actionTypes {
    SAVE_NAME = "SAVE_NAME",
    CREATE_GAME = "CREATE_GAME",
    CREATE_GAME_SUCCESS = "CREATE_GAME_SUCCESS",
    CREATE_GAME_FAIL = "CREATE_GAME_FAIL"
}

export interface IState {
    name: string | null
    gameName: string | null
    playersAmount: number | null
}

interface SaveNameAction {
    type: typeof actionTypes.SAVE_NAME
    payload: string
}

interface CreateGameAction {
    type: typeof actionTypes.CREATE_GAME
    payload: {
        gameName: string
        playersAmount: number
    }
}

interface CreateGameSuccessAction {
    type: typeof actionTypes.CREATE_GAME_SUCCESS
    payload: {
        gameName: string
        playersAmount: number
    }
}

export type ActionTypes = SaveNameAction | CreateGameAction | CreateGameSuccessAction