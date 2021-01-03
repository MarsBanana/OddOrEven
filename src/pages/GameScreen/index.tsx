import {Block, List, ListItem, Page, Preloader} from "framework7-react"
import React, {CSSProperties, useEffect, useRef, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {IState, GameData} from "../../store/types"
import {enterGame, quitGame, updateGameState} from "../../store/actions"
import api from "../../api"
import GoBack from "../../components/GoBack"
import GameInfo from "./GameInfo"
import Loader from "../../components/Loader"

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

    const data = useSelector<IState, GameData | null>((state) => state.currentGame)
    const id = useSelector<IState, string | undefined>((state) => state.currentId)

    useEffect(() => {
        if (data && !isGameEntered) {
            dispatch(enterGame())
            setIsGameEntered(true)
        }
    }, [data])

    const disconnect = useRef<() => void>()

    useEffect(() => {
        if (id) {
            disconnect.current = api.connectToGame({
                id,
                update: (game: GameData) => dispatch(updateGameState(game)),
            })
        }
    }, [id])

    const quit = () => {
        disconnect.current && dispatch(quitGame(disconnect.current))
    }

    useEffect(() => {
        window.onbeforeunload = quit
        return () => {
            quit()
            window.onbeforeunload = null
        }
    }, [])

    return (
        <Page>
            <Block style={customBlockStyle as CSSProperties}>
                <GoBack />
                {!data ? <Loader /> : <GameInfo data={data} />}
            </Block>
        </Page>
    )
}

export default GameScreen
