import type {HistoryData} from "../data/history-data.ts";
import type {RollData} from "../data/roll-data.ts";
import React from "react";

interface HistoryContextValue {
    historyData: HistoryData;
    addRollData: (rollData: RollData) => void;
    clearHistory: () => void;
}

export const HistoryContext = React.createContext<HistoryContextValue>({
    historyData: {items: []},
    addRollData: () => {},
    clearHistory: () => {},
});