import { createContext } from "react";
import { EntryInterface } from "../../interfaces";



interface EntriesContextProps {
    entries: EntryInterface[]
}

export const EntriesContext = createContext<EntriesContextProps>({} as EntriesContextProps)