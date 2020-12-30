import {Block, BlockTitle, List, ListItem, Page, Preloader} from "framework7-react"
import React, {CSSProperties, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import api from "../../api"
import playerJoin from "../../api/playerJoin"
import playerLeave from "../../api/playerLeave"
import GoBack from "../../components/GoBack"
import {saveCurrentId, updateGameState} from "../../store/actions"
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
    const data = useSelector<IState, GameData | null>((state) => state.currentGame)
    const name = useSelector<IState, string | null>((state) => state.name)

    const update = (game: GameData) => {
        dispatch(updateGameState(game))
    }

    useEffect(() => {
        if (id && name) {
            const disconnect = api.connectToGame({id, update})
            data && playerJoin({name, id, players: data.players})
            return () => {
                disconnect()
                dispatch(updateGameState(null))
                dispatch(saveCurrentId())
                data && playerLeave({name, id, players: data.players})
            }
        }
    }, [id])

    return (
        <Page>
            <Block style={customBlockStyle as CSSProperties}>
                <GoBack />
                {!data ? (
                    <div style={{maxWidth: "32px", marginLeft: "calc(50% - 16px)"}}>
                        <Preloader />
                    </div>
                ) : (
                    <>
                        <BlockTitle style={{textAlign: "center"}} medium>
                            {data.gameName}
                        </BlockTitle>
                        {!data.isStarted && (
                            <BlockTitle style={{textAlign: "center"}}>
                                Wait for {data.playersAmount - data.players.length} more players
                            </BlockTitle>
                        )}
                        <List>
                            {data.players.map((player) => (
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
