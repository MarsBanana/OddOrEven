import {Block, Page} from "framework7-react"
import GoBack from "../../components/GoBack"
import React, {useEffect, useRef} from "react"
import {useDispatch} from "react-redux"
import GamesList from "./GamesList"
import api from "../../api"
import {updateGamesList} from "../../store/actions"
import {Game} from "../../store/types"

const customBlockStyle = {
    marginTop: "20vh",
}

const JoinScreen: React.FC = () => {
    const dispatch = useDispatch()

    const disconnect = useRef<() => void>()

    useEffect(() => {
        disconnect.current = api.connectToGamesList({
            update: (gamesList: Array<Game>) => {
                dispatch(updateGamesList(gamesList))
            },
        })
        return () => {
            disconnect.current && disconnect.current()
        }
    }, [])

    return (
        <Page>
            <Block style={customBlockStyle}>
                <GoBack center />
                <GamesList />
            </Block>
        </Page>
    )
}

export default JoinScreen
