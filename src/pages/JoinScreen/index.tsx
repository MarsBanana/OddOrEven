import {Page} from "framework7-react"
import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {fetchGamesList} from "../../store/actions"

const JoinScreen: React.FC = () => {
    const dispatch = useDispatch()
    const fetch = () => {
        dispatch(fetchGamesList())
    }
    useEffect(() => {
        fetch()
    })
    return <Page></Page>
}

export default JoinScreen
