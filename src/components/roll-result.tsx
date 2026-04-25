import type {RollData} from "../data/dice-data.ts";
import {Stack} from "react-bootstrap";
import {DiceDisplay} from "./dice-display.tsx";

type RollResultProps = {
    data: RollData
}

export function RollResult({data}: RollResultProps) {
    return(
        <Stack direction="vertical" gap={4} className="mb-3">
            <DiceDisplay values={data.values}/>
            <div>
                <span className="total-label">Total:</span>
                <span className="total-number ms-2">{data.total}</span>
            </div>
        </Stack>
    )
}