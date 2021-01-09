import {App, View} from "framework7-react"
import React from "react"
import StartScreen from "./pages/StartScreen"
import CreateScreen from "./pages/CreateScreen"
import GameScreen from "./pages/GameScreen"
import JoinScreen from "./pages/JoinScreen"
import routes from "./routes"

const f7params = {
    name: "Odd or Even",
    id: "dater-test-game",
    routes: [
        {
            path: routes.start,
            component: StartScreen,
        },
        {
            path: routes.create,
            component: CreateScreen,
        },
        {
            path: routes.join,
            component: JoinScreen,
        },
        {
            path: routes.game,
            component: GameScreen,
        },
    ],
}

const AppComponent: React.FC = () => (
    <App params={f7params}>
        <View main url={routes.start} />
    </App>
)

export default AppComponent
