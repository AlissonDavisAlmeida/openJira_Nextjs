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
    entries: [
        {
            id: uuid(),
            status: "pending",
            description: "Pending: Pending task",
            createdAt: new Date(),
        },
        {
            id: uuid(),
            status: "in-progress",
            description: "In Progress: In progress task",
            createdAt: new Date(),
        },
        {
            id: uuid(),
            status: "done",
            description: "Done task",
            createdAt: new Date(),
        },
        
    ]
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

    return (
        <EntriesContext.Provider value={{
            ...entries,
            addEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )


}