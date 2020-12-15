import {App, View} from "framework7-react"
import React from "react"
import StartScreen from "./pages/StartScreen"

const f7params = {
    name: "Odd or Even",
    id: "dater-test-game",
}

const AppComponent: React.FC = () => (
    <App params={f7params}>
        <View main>
            <StartScreen />
        </View>
    </App>
)

export default AppComponent
