import { Reducer } from "react";
import { EntryInterface } from "../../interfaces";
import { State } from "./";

type EntriesType = 
    | { type: "ADD_ENTRY"; payload: EntryInterface }


export const entriesReducer: Reducer<State,EntriesType> = (state, action) => {

    switch(action.type){
       
        case "ADD_ENTRY":
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }

        default:
            return state;
    }
}