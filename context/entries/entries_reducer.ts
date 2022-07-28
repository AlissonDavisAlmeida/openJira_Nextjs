import { Reducer } from "react";
import { EntryInterface } from "../../interfaces";
import { State } from "./";

type EntriesType =
    | { type: "ADD_ENTRY"; payload: EntryInterface }
    | { type: "UPDATE_ENTRY", payload: EntryInterface }
    | { type: "LOAD_ENTRIES", payload: EntryInterface[] }


export const entriesReducer: Reducer<State, EntriesType> = (state, action) => {

    switch (action.type) {

        case "LOAD_ENTRIES":
            return {
                ...state,
                entries: action.payload
            }
        case "ADD_ENTRY":
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case "UPDATE_ENTRY":
            return {
                ...state,
                entries: state.entries.map(entry => {
                    if (entry.id === action.payload.id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description
                    }
                    return entry;
                })
            }
        default:
            return state;
    }
}