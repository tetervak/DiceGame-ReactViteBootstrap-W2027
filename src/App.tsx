import {Footer} from "./components/footer.tsx";
import {Header} from "./components/header.tsx";
import {DiceRoller} from "./components/dice-roller.tsx";
import {Container} from "react-bootstrap";
import {HistoryProvider} from "./context/history-provider.tsx";
import {RollHistory} from "./components/roll-history.tsx";

function App() {
    return (
        <>
            <Header title="Dice Game"/>
            <Container>
                <HistoryProvider>
                    <DiceRoller/>
                    <RollHistory/>
                </HistoryProvider>
            </Container>
            <Footer name="Alex Tetervak"/>
        </>
    )
}

export default App;
