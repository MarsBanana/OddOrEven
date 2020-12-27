import {App, View} from "framework7-react"
import React from "react"
import StartScreen from "./pages/StartScreen"
import CreateScreen from "./pages/CreateScreen"
import GameScreen from "./pages/GameScreen"

const f7params = {
    name: "Odd or Even",
    id: "dater-test-game",
    routes: [
        {
            path: "/",
            component: StartScreen,
        },
        {
            path: "/create/",
            component: CreateScreen,
        },
        {
            path: "/game/",
            component: GameScreen,
        },
    ],
}

const AppComponent: React.FC = () => (
    <App params={f7params}>
        <View main url="/" />
    </App>
)

export default AppComponent
