import {type RollData, getRollData,} from "./data/dice-data";
import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import {useState} from "react";
import * as React from "react";
import {RollResult} from "./components/roll-result.tsx";
import {Form} from "react-bootstrap";
import {Footer} from "./components/footer.tsx";
import {Header} from "./components/header.tsx";
import {CheckLg, XLg} from "react-bootstrap-icons";

function App() {
    const [rollData, setRollData] = useState<RollData | undefined>(undefined);
    const [numberOfDice, setNumberOfDice] = useState<number>(3);

    const onRollDice = () => {
        setRollData(getRollData(numberOfDice));
    };

    const onReset = () => {
        setNumberOfDice(3);
        setRollData(undefined);
    };

    const onNumberOfDiceChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setNumberOfDice(parseInt(event.target.value))
    }

    return (
        <>
            <Header title="Dice Game"/>
            <Container>
                <h2 className="mt-4 mb-3">Roll the Dice</h2>
                {rollData && <RollResult data={rollData}/>}
                <Row className="align-items-baseline my-4">
                    <Col xs="auto">
                        <Form.Label>Number of Dice:</Form.Label>
                    </Col>
                    <Col xs="auto">
                        <Form.Select value={numberOfDice} onChange={onNumberOfDiceChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Stack direction="horizontal" gap={2} className="mb-3 ms-4">
                    <Button onClick={onRollDice} variant="primary">Roll Dice<CheckLg className="ms-2"/></Button>
                    <Button onClick={onReset} variant="outline-warning">Reset<XLg className="ms-2"/></Button>
                </Stack>
            </Container>
            <Footer name="Alex Tetervak"/>
        </>
    )
}

export default App;
