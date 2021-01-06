import {List, ListItem} from "framework7-react"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {saveCurrentGameId} from "../../store/actions"
import {Game, IState} from "../../store/types"

const GamesList: React.FC = () => {
    const gamesList = useSelector<IState, Array<Game>>((state) => state.gamesList)
    const [list, setList] = useState<Array<Game>>(gamesList)
    const dispatch = useDispatch()

    useEffect(() => {
        gamesList.length && setList(gamesList)
    }, [gamesList])

    const connectToGame = (id: string) => {
        dispatch(saveCurrentGameId(id))
    }

    return (
        <List>
            {list.map(
                (game: Game) =>
                    !game.data.isStarted && (
                        <ListItem
                            key={game.id}
                            title={game.data.gameName}
                            after={`${game.data.players.length}/${game.data.playersAmount}`}
                            onClick={() => connectToGame(game.id)}
                        />
                    )
            )}
        </List>
    )
}

export default GamesList
