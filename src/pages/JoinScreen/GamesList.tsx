import {List, ListItem, f7} from "framework7-react"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {saveCurrentId} from "../../store/actions"
import {Game, IState} from "../../store/types"

const GamesList: React.FC = () => {
    const gamesList = useSelector<IState, Array<Game>>((state) => state.gamesList)
    const [list, setList] = useState<Array<Game>>(gamesList)
    const dispatch = useDispatch()

    useEffect(() => {
        gamesList.length && setList(gamesList)
    }, [gamesList])

    const connectToGame = (id: string) => {
        dispatch(saveCurrentId(id))
        f7.views.main.router.navigate("/game/")
    }

    return (
        <List>
            {list.map((game: Game) => (
                <ListItem
                    key={game.id}
                    title={game.data.gameName}
                    after={`Players: ${game.data.players.length}/${game.data.playersAmount}`}
                    onClick={() => connectToGame(game.id)}
                />
            ))}
        </List>
    )
}

export default GamesList
