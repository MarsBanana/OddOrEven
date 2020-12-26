import {Block, Button, Page} from "framework7-react"
import GoBack from "../../components/GoBack"
import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {fetchGamesList} from "../../store/actions"

const customBlockStyle = {
    marginTop: "20vh",
}

const JoinScreen: React.FC = () => {
    const dispatch = useDispatch()
    const fetch = () => dispatch(fetchGamesList())
    useEffect(() => {
        fetch()
    })
    return (
        <Page>
            <Block style={customBlockStyle}>
                <Button onClick={fetch}>Update</Button>
                <GoBack />
            </Block>
        </Page>
    )
}

export default JoinScreen
