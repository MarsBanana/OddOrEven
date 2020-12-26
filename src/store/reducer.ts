import {IState, actionTypes, ActionTypes} from "./types"

const initialState: IState = {
    name: null,
    gameName: null,
    playersAmount: null,
    gamesList: []
}

const reducer = (state = initialState, action: ActionTypes): IState => {
    switch (action.type) {
        case actionTypes.SAVE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case actionTypes.CREATE_GAME:
            return {
                ...state,
                gameName: action.payload.gameName,
                playersAmount: action.payload.playersAmount
            }
        case actionTypes.ADD_GAMES_LIST:
            return {
                ...state,
                gamesList: action.payload
            }
        default:
            return state
    }
}

export default reducer