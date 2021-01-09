import sagas from "./sagas"
import reducer from "./reducer"
import createSagaMiddlewate from "redux-saga"
import {createStore, applyMiddleware, compose} from "redux"

const sagaMiddleware = createSagaMiddlewate()

const storeEnchancers = compose(
    applyMiddleware(sagaMiddleware),
)

const store = createStore(reducer, storeEnchancers)

sagaMiddleware.run(sagas)

export default store