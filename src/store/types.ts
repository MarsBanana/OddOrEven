export enum actionTypes {
    SAVE_NAME = "SAVE_NAME",
    CREATE_GAME = "CREATE_GAME"
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

export type ActionTypes = SaveNameAction | CreateGameAction