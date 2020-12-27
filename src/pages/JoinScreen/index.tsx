import {Block, Button, Page} from "framework7-react"
import GoBack from "../../components/GoBack"
import React, {useEffect, useCallback} from "react"
import {useDispatch} from "react-redux"
import {fetchGamesList} from "../../store/actions"
import GamesList from "./GamesList"

const customBlockStyle = {
    marginTop: "20vh",
}

const JoinScreen: React.FC = () => {
    const dispatch = useDispatch()
    const fetch = useCallback(() => dispatch(fetchGamesList()), [dispatch])
    useEffect(() => {
        fetch()
    })
    return (
        <Page>
            <Block style={customBlockStyle}>
                <Button onClick={fetch}>Update</Button>
                <GamesList />
                <GoBack />
            </Block>
        </Page>
    )
}

export default JoinScreen
