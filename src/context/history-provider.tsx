import React from "react";
import type {HistoryData, HistoryItem} from "../data/history-data.ts";
import type {RollData} from "../data/roll-data.ts";
import { HistoryContext } from "./history-context.ts";

export function HistoryProvider({children}: {children: React.ReactNode}){
    const [historyData, setHistoryData] = React.useState<HistoryData>({items: []});

    const addHistoryItem = (item: HistoryItem) => {
        setHistoryData((prevData) => ({items: [...prevData.items, item]}));
    }

    const clearHistory = () => {
        setHistoryData({items: []});
    }

    const addRollData = (rollData: RollData) => {
        addHistoryItem({id: crypto.randomUUID(), rollData, timestamp: new Date()});
    }

    return (
        <HistoryContext.Provider value={{historyData, addRollData, clearHistory}}>
            {children}
        </HistoryContext.Provider>
    );
}