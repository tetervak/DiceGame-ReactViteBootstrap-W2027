import * as React from "react";
import {Footer} from "./components/footer.tsx";
import {Header} from "./components/header.tsx";
import {RollResult} from "./components/roll-result.tsx";
import {useDice} from "./hooks/use-dice.ts";
import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {CheckLg, XLg} from "react-bootstrap-icons";

function App() {

    const {rollData, rollDice, reset, numberOfDice, setNumberOfDice} = useDice();

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
                    <Button onClick={rollDice} variant="primary">Roll Dice<CheckLg className="ms-2"/></Button>
                    <Button onClick={reset} variant="outline-warning">Reset<XLg className="ms-2"/></Button>
                </Stack>
            </Container>
            <Footer name="Alex Tetervak"/>
        </>
    )
}

export default App;
