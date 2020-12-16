import {Block, Link, Row} from "framework7-react"
import React from "react"
import NameForm from "./NameForm"

const customRowStyle = {
    maxWidth: "300px",
    marginTop: "40vh",
    marginLeft: "calc(50% - 150px)",
}

const StartScreen: React.FC = () => {
    return (
        <>
            <Block>
                <Row style={customRowStyle}>
                    <Link href="/join/">Join</Link>
                    <Link href="/create/">Create</Link>
                </Row>
            </Block>
            <NameForm />
        </>
    )
}

export default StartScreen
