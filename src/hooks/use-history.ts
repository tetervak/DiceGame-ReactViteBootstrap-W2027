import React from "react";
import {HistoryContext} from "../context/history-context.ts";

export function useHistory() {
    const context = React.useContext(HistoryContext);
    if (context === undefined) {
        throw new Error('useHistory must be used within a HistoryProvider');
    }
    return context;
}