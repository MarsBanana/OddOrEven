import {Block, Page} from "framework7-react"
import GoBack from "../../components/GoBack"
import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {fetchGamesList} from "../../store/actions"
import GamesList from "./GamesList"

const customBlockStyle = {
    marginTop: "20vh",
}

const JoinScreen: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGamesList())
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
