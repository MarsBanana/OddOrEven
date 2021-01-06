import createGame from "./createGame"
import fetchGamesList from "./fetchGamesList"
import connectToGame from "./connectToGame"
import playerJoin from "./playerJoin"
import playerLeave from "./playerLeave"
import pickNumber from "./pickNumber"
import guess from "./guess"

const api = {createGame, fetchGamesList, connectToGame, playerJoin, playerLeave, pickNumber, guess}

export default api