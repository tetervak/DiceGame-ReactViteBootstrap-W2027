import {Stack} from "react-bootstrap";
import {OneDice} from "./one-dice.tsx";

type DiceDisplayProps = {
    values: number[];
}

export function DiceDisplay({values}: DiceDisplayProps) {
    return (
        <Stack direction="horizontal" gap={2}>
            {values.map(
                (value: number, index: number) => (
                    <OneDice side={value} key={`${index}_${value}`}/>
                )
            )}
        </Stack>
    )
}