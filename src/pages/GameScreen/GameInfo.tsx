import React from "react"
import CenteredText from "../../components/CenteredText"
import {List, ListItem} from "framework7-react"
import {GameData, MoveData, phaseTypes, Player} from "../../store/types"

const Phase: React.FC<{currentMove?: MoveData}> = ({currentMove}) => (
    <CenteredText
        text={`${currentMove?.playerName} is ${
            currentMove?.phase === phaseTypes.GUESS ? "guessing" : "picking"
        }`}
    />
)

const RoundAnnouncer: React.FC<{roundsLeft: number}> = ({roundsLeft}) => (
    <CenteredText text={roundsLeft !== 1 ? `${roundsLeft} rounds left` : `Final round`} />
)

const PlayersList: React.FC<{players: Array<Player>}> = ({players}) => (
    <List>
        {players.map((player, idx) => (
            <ListItem key={player.name + idx} after={`${player.points}`} title={player.name} />
        ))}
    </List>
)

const WaitingForPlayers: React.FC<{
    playersAmountExpected: number
    playersAmountCurrent: number
}> = ({playersAmountExpected, playersAmountCurrent}) => (
    <CenteredText text={`Wait for ${playersAmountExpected - playersAmountCurrent} more players`} />
)

const GameInfo: React.FC<{currentGame: GameData}> = ({currentGame}) => (
    <>
        <CenteredText title text={currentGame.gameName} />
        {!currentGame.isStarted ? (
            <WaitingForPlayers
                playersAmountExpected={currentGame.playersAmount}
                playersAmountCurrent={currentGame.players.length}
            />
        ) : (
            <>
                <Phase currentMove={currentGame.currentMove} />
                <RoundAnnouncer roundsLeft={currentGame.roundsLeft} />
            </>
        )}
        <PlayersList players={currentGame.players} />
    </>
)

export default GameInfo
