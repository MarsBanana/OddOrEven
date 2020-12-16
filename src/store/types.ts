export enum actionTypes {
    SAVE_NAME = "SAVE_NAME"
}

export interface IState {
    name: string | null
}

interface SaveNameAction {
    type: typeof actionTypes.SAVE_NAME
    payload: string
}

export type ActionTypes = SaveNameAction