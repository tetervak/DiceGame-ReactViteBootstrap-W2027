import {useState} from "react";
import {getRollData, type RollData} from "../data/dice-data.ts";

export function useDice() {
    const [rollData, setRollData] = useState<RollData | undefined>(undefined);
    const [numberOfDice, setNumberOfDice] = useState<number>(3);

    const rollDice = () => {
        setRollData(getRollData(numberOfDice));
    };

    const reset = () => {
        setNumberOfDice(3);
        setRollData(undefined);
    };

    return {rollData, rollDice, reset, numberOfDice, setNumberOfDice};
}