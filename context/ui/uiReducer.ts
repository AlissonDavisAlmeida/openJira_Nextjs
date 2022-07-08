import { Reducer } from "react";
import { State } from "./";

export const uiReducer: Reducer<State, {type:string, payload?:any}> = (state, action) => {


    switch (action.type) {

        case "OPEN_DRAWER":
            return {
                ...state,
                isSideBarOpen: true
            }
        case "CLOSE_DRAWER":
            return {
                ...state,
                isSideBarOpen: false
            }    
        default:
            return state;
    }
}