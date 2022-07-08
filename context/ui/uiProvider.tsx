import { Reducer, useReducer } from "react";
import { UIContext, uiReducer } from "./";


interface UIProviderInterface {
    children: React.ReactNode;
}

export interface State {
    isSideBarOpen: boolean;
}

const initialState: State = {
    isSideBarOpen: false
}

export const UIProvider = ({ children }: UIProviderInterface) => {

    const [state, dispatch] = useReducer<Reducer<State, {type:string, payload?:any}>>(uiReducer, initialState)

    const { isSideBarOpen } = state
    const setIsSideBarOpen = dispatch

    return (
        <UIContext.Provider value={{
            isSideBarOpen,
            setIsSideBarOpen
        }}>
            {children}
        </UIContext.Provider>
    )
}


