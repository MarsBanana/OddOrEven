import {actionTypes,ActionTypes} from "./types"

const saveName = (name: string): ActionTypes => ({
    type: actionTypes.SAVE_NAME,
    payload: name
})

export const actionCreators = {saveName}