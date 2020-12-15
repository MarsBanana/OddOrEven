import {actionTypes,ActionTypes} from "./types"

export const saveName = (name: string): ActionTypes => ({
    type: actionTypes.SAVE_NAME,
    payload: name
})
