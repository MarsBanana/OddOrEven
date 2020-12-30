import {Block, BlockTitle, List, ListItem, Page, Preloader} from "framework7-react"
import React, {CSSProperties, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import api from "../../api"
import {updateGameState} from "../../store/actions"
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

    const update = (game: GameData) => {
        dispatch(updateGameState(game))
    }

    useEffect(() => {
        const disconnect = api.connectToGame({id, update})
        return () => {
            disconnect()
        }
    })

    return (
        <Page>
            <Block style={customBlockStyle as CSSProperties}>
                {!data ? (
                    <Preloader size={48} />
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
