export interface RollData {
    values: number[];
    total: number;
}

function getRandomDiceValue(): number {
    return 1 + Math.floor(6 * Math.random());
}

export function getRollData(numberOfDice: number): RollData {
    const values: number[] = [];
    let total: number = 0;
    for (let i: number = 1; i <= numberOfDice; i++) {
        const diceValue: number = getRandomDiceValue();
        values.push(diceValue);
        total += diceValue;
    }
    return {
        values,
        total
    }
}