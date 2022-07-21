import { Reducer } from "react";
import { State } from "./";

type UIActionType =
    | { type: "OPEN_DRAWER", payload?: boolean }
    | { type: "CLOSE_DRAWER", payload?: boolean }
    | { type: "IS_ADD_ENTRY", payload?: boolean }
    | { type: "START_DRAGGING", payload?: boolean }
    | { type: "STOP_DRAGGING", payload?: boolean }


export const uiReducer: Reducer<State, UIActionType> = (state, action) => {


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
        case "IS_ADD_ENTRY":
            return {
                ...state,
                isAdding: action.payload!
            }
        case "START_DRAGGING":
            return {
                ...state,
                isDragging: true
            }
        case "STOP_DRAGGING":
            return {
                ...state,
                isDragging: false
            }
        default:
            return state;
    }
}