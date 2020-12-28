import {List, ListItem} from "framework7-react"
import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {Game, IState} from "../../store/types"

const GamesList: React.FC = () => {
    const gamesList = useSelector<IState, Array<Game>>((state) => state.gamesList)
    const [list, setList] = useState<Array<Game>>(gamesList)
    useEffect(() => {
        gamesList.length && setList(gamesList)
    }, [gamesList])
    return (
        <List>
            {list.map((game: Game) => (
                <ListItem
                    key={game.id}
                    title={game.data.gameName}
                    after={game.data.playersAmount}
                />
            ))}
        </List>
    )
}

export default GamesList
