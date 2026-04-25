import type {RollData} from "./roll-data.ts";

export interface HistoryItem{
    id: string;
    rollData: RollData;
    timestamp: Date;
}

export interface HistoryData{
    items: HistoryItem[];
}