import {Footer} from "./components/footer.tsx";
import {Header} from "./components/header.tsx";
import {DiceRoller} from "./components/dice-roller.tsx";

function App() {
    return (
        <>
            <Header title="Dice Game"/>
            <DiceRoller/>
            <Footer name="Alex Tetervak"/>
        </>
    )
}

export default App;
