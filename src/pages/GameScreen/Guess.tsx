import React from "react"
import {Row, Button} from "framework7-react"
import CenteredText from "../../components/CenteredText"

const Guess: React.FC = () => {
    return (
        <>
            <CenteredText title text="Choose wisely :)" />
            <Row>
                <Button>ODD</Button>
                <Button>EVEN</Button>
            </Row>
        </>
    )
}

export default Guess
