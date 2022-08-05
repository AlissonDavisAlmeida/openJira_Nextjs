import { useEffect, useReducer } from "react";
import { EntryInterface } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { entriesAPI } from "../../api";
import { useSnackbar } from "notistack";


interface EntriesProviderProps {
    children: React.ReactNode;
}

export interface State {
    entries: EntryInterface[];
}

const initialState: State = {
    entries: []
}

export const EntriesProvider = ({ children }: EntriesProviderProps) => {

    const [entries, dispatch] = useReducer(entriesReducer, initialState);

    const { enqueueSnackbar } = useSnackbar()

    useEffect(() => {

        const fetchEntries = async () => {

            const entries = await entriesAPI.get("/entries")

            dispatch({
                type: "LOAD_ENTRIES",
                payload: entries.data.map((entry: any) => ({
                    ...entry,
                    id: entry._id
                }))
            })
        }

        fetchEntries()
    }, [])

    const addEntry = async (description: string) => {

        const { data } = await entriesAPI.post<EntryInterface>("/entries", { description })


        dispatch({
            type: "ADD_ENTRY",
            payload: {
                ...data,
                id: data._id!
            }
        })
    }

    const updateEntry = async ({ id, description, status }: EntryInterface) => {
        try {
            const { data } = await entriesAPI.put(`/entries/${id}`, { description, status })

            dispatch({
                type: "UPDATE_ENTRY",
                payload: data
            })

            enqueueSnackbar("Entry updated", {
                autoHideDuration: 1000,
                variant: "success",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                }
            })

        } catch (e) {
            console.log(e)
        }
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