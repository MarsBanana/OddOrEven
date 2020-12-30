import {Block, BlockTitle, Page, Preloader} from "framework7-react"
import React, {useEffect} from "react"
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
}

const GameScreen: React.FC = () => {
    const dispatch = useDispatch()
    const id = useSelector<IState, string | undefined>((state) => state.currentId)
    const data = useSelector<IState, GameData | null>((state) => state.currentGame)

    const update = (game: GameData) => {
        dispatch(updateGameState(game))
    }

    useEffect(() => {
        api.connectToGame({id, update})
    })

    return (
        <Page>
            <Block style={customBlockStyle}>
                {!data ? (
                    <Preloader />
                ) : (
                    <BlockTitle style={{maxWidth: "136.1px"}} medium>
                        {data.gameName}
                    </BlockTitle>
                )}
            </Block>
        </Page>
    )
}

export default GameScreen
