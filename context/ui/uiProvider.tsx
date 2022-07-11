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

    const openSideBar = ()=>{
        dispatch({type: "OPEN_DRAWER"})
    
    }

    const closeSideBar = ()=>{
        dispatch({type: "CLOSE_DRAWER"})
    }

    const { isSideBarOpen } = state

    return (
        <UIContext.Provider value={{
            isSideBarOpen,
            openSideBar,
            closeSideBar
        }}>
            {children}
        </UIContext.Provider>
    )
}


