import {
    App,
    NavRight,
    Panel,
    View,
    Page,
    Navbar,
    Block,
    Row,
    Col,
    Button,
    Popup,
    Link,
} from "framework7-react"

const f7params = {
    // App Name
    name: "My App",
    // App id
    id: "com.myapp.test",
    // ...
}

const AppComponent = () => (
    /* Main Framework7 App component where we pass Framework7 params */
    <App params={f7params}>
        {/* Left Panel with "cover" effect */}
        <Panel left cover>
            <View>
                <Page>
                    <Navbar title="Left Panel"></Navbar>
                    <Block>
                        <p>Here comes the left panel text</p>
                    </Block>
                </Page>
            </View>
        </Panel>

        {/* Right Panel with "reveal" effect */}
        <Panel right reveal>
            <View>
                <Page>
                    <Navbar title="Right Panel"></Navbar>
                    <Block>
                        <p>Here comes the right panel text</p>
                    </Block>
                </Page>
            </View>
        </Panel>

        {/*  Main view */}
        <View main>
            <Page>
                <Navbar title="Awesome App"></Navbar>
                {/* Page content */}
                <Block>
                    <p>Here comes main view page text</p>
                </Block>
                {/* Buttons to open panels */}
                <Row>
                    <Col>
                        <Button panelOpen="left">Left Panel</Button>
                    </Col>
                    <Col>
                        <Button panelOpen="right">Right Panel</Button>
                    </Col>
                </Row>
                {/* Button to open popup */}
                <Button popupOpen="#my-popup">Open Popup</Button>
            </Page>
        </View>

        {/* Popup. All modals should be outside of Views */}
        <Popup id="my-popup">
            <View>
                <Page>
                    <Navbar title="Popup">
                        {/* Link to close popup */}
                        <NavRight>
                            <Link popupClose>Close</Link>
                        </NavRight>
                    </Navbar>
                    <Block>
                        <p>Here comes popup text</p>
                    </Block>
                </Page>
            </View>
        </Popup>
    </App>
)

export default AppComponent
