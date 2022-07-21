import { createContext } from "react";
import { EntryInterface } from "../../interfaces";



interface EntriesContextProps {
    entries: EntryInterface[]
    addEntry: (description: string) => void
    updateEntry: (entry: EntryInterface) => void
}

export const EntriesContext = createContext<EntriesContextProps>({} as EntriesContextProps)