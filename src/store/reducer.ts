import {IState, actionTypes, ActionTypes} from "./types"

const initialState: IState = {
    name: null,
    gameName: null,
    playersAmount: null
}

const reducer = (state = initialState, action: ActionTypes): IState => {
    switch (action.type) {
        case actionTypes.SAVE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case actionTypes.CREATE_GAME_SUCCESS:
            return {
                ...state,
                gameName: action.payload.gameName,
                playersAmount: action.payload.playersAmount
            }
        default:
            return state
    }
}

export default reducer