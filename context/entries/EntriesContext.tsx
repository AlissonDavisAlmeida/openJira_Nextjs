import { createContext } from "react";
import { EntryInterface } from "../../interfaces";



interface EntriesContextProps {
    entries: EntryInterface[]
    addEntry: (description: string) => void
}

export const EntriesContext = createContext<EntriesContextProps>({} as EntriesContextProps)