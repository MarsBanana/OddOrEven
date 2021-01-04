import React from "react"
import CenteredText from "../../components/CenteredText"
import {List, ListItem} from "framework7-react"
import {GameData, phaseTypes} from "../../store/types"

const GameInfo: React.FC<{data: GameData}> = ({data}) => (
    <>
        <CenteredText title text={data.gameName} />
        {!data.isStarted ? (
            <CenteredText
                text={`Wait for ${data.playersAmount - data.players.length} more players`}
            />
        ) : (
            <>
                <CenteredText
                    text={`${data.currentMove?.name} is ${
                        data.currentMove?.phase === phaseTypes.GUESS ? "guessing" : "picking"
                    }`}
                />
                <CenteredText
                    text={data.roundsLeft !== 1 ? `${data.roundsLeft} rounds left` : `Final round`}
                />
            </>
        )}
        <List>
            {data.players.map((player, idx) => (
                <ListItem key={player.name + idx} after={`${player.points}`} title={player.name} />
            ))}
        </List>
    </>
)

export default GameInfo
