import {App, View} from "framework7-react"
import StartScreen from "./pages/StartScreen"

const f7params = {
    name: "Odd or Even",
    id: "dater-test-game",
}

const AppComponent = () => (
    <App params={f7params}>
        <View main>
            <StartScreen />
        </View>
    </App>
)

export default AppComponent
