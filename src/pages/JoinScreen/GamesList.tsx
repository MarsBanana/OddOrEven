import {List, ListItem} from "framework7-react"
import React, {useEffect} from "react"
import {useSelector} from "react-redux"
import {Game, IState} from "../../store/types"

const GamesList: React.FC = () => {
    const gamesList: Array<Game> = useSelector((state: IState) => state.gamesList)
    useEffect(() => {
        console.log(gamesList)
    }, [gamesList])
    return (
        <List>
            {gamesList.map((game: Game) => (
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
