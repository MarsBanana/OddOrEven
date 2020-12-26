import React, {useEffect} from "react"
import {Game} from "../../store/types"
import {ListItem} from "framework7-react"

const GameComponent: React.FC<{game: Game}> = ({game}) => {
    useEffect(() => {
        console.log(game)
    })
    return <ListItem title={game.data.gameName} after={game.data.playersAmount} />
}

export default GameComponent
