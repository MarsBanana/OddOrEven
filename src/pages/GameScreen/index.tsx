import {Block, BlockTitle, List, ListItem, Page, Preloader} from "framework7-react"
import React, {CSSProperties, useEffect, useRef, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {IState, GameData} from "../../store/types"
import {enterGame, quitGame, updateGameState} from "../../store/actions"
import api from "../../api"
import GoBack from "../../components/GoBack"

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
                <GoBack>QUIT</GoBack>
                {!data ? (
                    <div style={{maxWidth: "32px", marginLeft: "calc(50% - 16px)"}}>
                        <Preloader />
                    </div>
                ) : (
                    <>
                        <BlockTitle style={{textAlign: "center"}} medium>
                            {data.gameName}
                        </BlockTitle>
                        {!data.isStarted ? (
                            <BlockTitle style={{textAlign: "center"}}>
                                Wait for {data.playersAmount - data.players.length} more players
                            </BlockTitle>
                        ) : (
                            <BlockTitle style={{textAlign: "center"}}>
                                {data.roundsLeft} rounds left
                            </BlockTitle>
                        )}
                        <List>
                            {data.players.map((player, idx) => (
                                <ListItem
                                    key={player.name + idx}
                                    after={`${player.points}`}
                                    title={player.name}
                                />
                            ))}
                        </List>
                    </>
                )}
            </Block>
        </Page>
    )
}

export default GameScreen
