import sagas from "./sagas"
import reducer from "./reducer"
import createSagaMiddlewate from "redux-saga"
import {createStore, applyMiddleware, compose} from "redux"

const sagaMiddleware = createSagaMiddlewate()

const storeEnchancers = compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducer, storeEnchancers)

sagaMiddleware.run(sagas)

export default store