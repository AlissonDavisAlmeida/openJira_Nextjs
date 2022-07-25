import { useReducer } from "react";
import { EntryInterface } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import {v4 as uuid} from "uuid"


interface EntriesProviderProps {
    children: React.ReactNode;
}

export interface State {
    entries: EntryInterface[];
}

const initialState: State = {
    entries: [ ]
}

export const EntriesProvider = ({ children }: EntriesProviderProps) => {

    const [entries, dispatch] = useReducer(entriesReducer, initialState);

    const addEntry = (description: string) => {
        dispatch({
            type: "ADD_ENTRY",
            payload: {
                id: uuid(),
                status: "pending",
                description,
                createdAt: new Date(),
            }
        })
    }

    const updateEntry = (entry: EntryInterface) => {
        dispatch({
            type: "UPDATE_ENTRY",
            payload: entry
        })
    }

    return (
        <EntriesContext.Provider value={{
            ...entries,
            addEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )


}