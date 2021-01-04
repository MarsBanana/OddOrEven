import React from "react"
import {Row, Button} from "framework7-react"
import CenteredText from "../../components/CenteredText"
import {useDispatch, useSelector} from "react-redux"
import {IState} from "../../store/types"
import {guess} from "../../store/actions"

const Guess: React.FC = () => {
    const dispatch = useDispatch()

    const number = useSelector<IState, number | undefined>(
        (state) => state.currentGame?.currentMove?.number
    )

    const handleGuess = (points: number) => {
        dispatch(guess(points))
    }

    const handleOdd = () => {
        if (number) {
            number % 2 !== 0 ? handleGuess(1) : handleGuess(0)
        }
    }

    const handleEven = () => {
        if (number) {
            number % 2 === 0 ? handleGuess(1) : handleGuess(0)
        }
    }

    return (
        <>
            <CenteredText title text="Choose wisely :)" />
            <Row>
                <Button onClick={handleOdd}>ODD</Button>
                <Button onClick={handleEven}>EVEN</Button>
            </Row>
        </>
    )
}

export default Guess
