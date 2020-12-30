import {Block, BlockTitle, List, ListItem, Page, Preloader} from "framework7-react"
import React, {CSSProperties, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import GoBack from "../../components/GoBack"
import {enterGame, quitGame} from "../../store/actions"
import {IState, GameData} from "../../store/types"

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
    const id = useSelector<IState, string | undefined>((state) => state.currentId)
    const game = useSelector<IState, GameData | null>((state) => state.currentGame)
    const name = useSelector<IState, string | null>((state) => state.name)
    const disconnect = useSelector<IState, (() => void) | undefined>((state) => state.disconnect)

    useEffect(() => {
        if (id && name) {
            dispatch(enterGame(name, id, game))
            return () => {
                dispatch(quitGame(name, id, game, disconnect))
            }
        }
    }, [id])

    return (
        <Page>
            <Block style={customBlockStyle as CSSProperties}>
                <GoBack />
                {!game ? (
                    <div style={{maxWidth: "32px", marginLeft: "calc(50% - 16px)"}}>
                        <Preloader />
                    </div>
                ) : (
                    <>
                        <BlockTitle style={{textAlign: "center"}} medium>
                            {game.gameName}
                        </BlockTitle>
                        {!game.isStarted && (
                            <BlockTitle style={{textAlign: "center"}}>
                                Wait for {game.playersAmount - game.players.length} more players
                            </BlockTitle>
                        )}
                        <List>
                            {game.players.map((player) => (
                                <ListItem>{player.name}</ListItem>
                            ))}
                        </List>
                    </>
                )}
            </Block>
        </Page>
    )
}

export default GameScreen
