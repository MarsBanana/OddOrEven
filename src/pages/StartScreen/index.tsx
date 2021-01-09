import {Page, Link, Row} from "framework7-react"
import React from "react"
import routes from "../../routes"
import NameForm from "./NameForm"

const customRowStyle = {
    maxWidth: "300px",
    marginTop: "40vh",
    marginLeft: "calc(50% - 150px)",
}

const StartScreen: React.FC = () => {
    return (
        <Page>
            <Row style={customRowStyle}>
                <Link href={routes.join}>Join</Link>
                <Link href={routes.create}>Create</Link>
            </Row>
            <NameForm />
        </Page>
    )
}

export default StartScreen
