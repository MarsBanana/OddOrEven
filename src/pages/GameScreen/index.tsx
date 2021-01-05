import {Block, Page} from "framework7-react"
import React, {CSSProperties, useEffect, useRef, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {IState, GameData} from "../../store/types"
import {enterGame, quitGame, updateGameState} from "../../store/actions"
import api from "../../api"
import GoBack from "../../components/GoBack"
import GameInfo from "./GameInfo"
import Loader from "../../components/Loader"
import Move from "./Move"
import Winner from "./Winner"

const customBlockStyle = {
    marginTop: "20vh",
    maxWidth: "70%",
    marginLeft: "15%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
}

const GameScreen: React.FC = () => {
    const dispatch = useDispatch()

    const [isGameEntered, setIsGameEntered] = useState<boolean>(false)

    const currentGame = useSelector<IState, GameData | null>((state) => state.currentGame)
    const currentGameId = useSelector<IState, string | undefined>((state) => state.currentGameId)
    const playerName = useSelector<IState, string | null>((state) => state.playerName)

    useEffect(() => {
        if (currentGame && !isGameEntered) {
            dispatch(enterGame())
            setIsGameEntered(true)
        }
    }, [currentGame])

    const disconnect = useRef<() => void>()

    useEffect(() => {
        if (currentGameId) {
            disconnect.current = api.connectToGame({
                currentGameId,
                update: (game: GameData) => dispatch(updateGameState(game)),
            })
        }
    }, [currentGameId])

    const quit = () => {
        disconnect.current && dispatch(quitGame(disconnect.current))
    }

    useEffect(() => {
        window.onbeforeunload = () => {
            quit()
            return null
        }
        return () => {
            quit()
            window.onbeforeunload = null
        }
    }, [])

    return (
        <Page>
            <Block style={customBlockStyle as CSSProperties}>
                {!currentGame?.isStarted && <GoBack />}
                {!currentGame ? <Loader /> : <GameInfo currentGame={currentGame} />}
                {currentGame && playerName && (
                    <Move currentGame={currentGame} playerName={playerName} />
                )}
                {currentGame && <Winner />}
            </Block>
        </Page>
    )
}

export default GameScreen
