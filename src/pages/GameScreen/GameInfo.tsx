import React from "react"
import CenteredText from "../../components/CenteredText"
import {List, ListItem} from "framework7-react"
import {GameData} from "../../store/types"

const GameInfo: React.FC<{data: GameData}> = ({data}) => (
    <>
        <CenteredText title text={data.gameName} />
        {!data.isStarted ? (
            <CenteredText
                text={`Wait for ${data.playersAmount - data.players.length} more players`}
            />
        ) : (
            <CenteredText text={`${data.roundsLeft} rounds left`} />
        )}
        <List>
            {data.players.map((player, idx) => (
                <ListItem key={player.name + idx} after={`${player.points}`} title={player.name} />
            ))}
        </List>
    </>
)

export default GameInfo
