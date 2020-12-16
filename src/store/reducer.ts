import {IState, actionTypes, ActionTypes} from "./types"

const initialState: IState = {
    name: null
}

const reducer = (state = initialState, action: ActionTypes): IState => {
    switch (action.type) {
        case actionTypes.SAVE_NAME:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}

export default reducer