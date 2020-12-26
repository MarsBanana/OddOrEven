import {List} from "framework7-react"
import React, {useEffect} from "react"
import {useSelector} from "react-redux"
import {IState} from "../../store/types"
import GameComponent from "./Game"

const GamesList: React.FC = () => {
    const gamesList = useSelector((state: IState) => state.gamesList)
    useEffect(() => {
        console.log(gamesList)
    })
    return (
        <List>
            {gamesList.map((game) => (
                <GameComponent game={game} key={game.id} />
            ))}
        </List>
    )
}

export default GamesList
