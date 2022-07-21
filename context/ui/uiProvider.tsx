import {  useReducer } from "react";
import { UIContext, uiReducer } from "./";


interface UIProviderInterface {
    children: React.ReactNode;
}

export interface State {
    isSideBarOpen: boolean;
    isAdding: boolean;
    isDragging: boolean;
}

const initialState: State = {
    isSideBarOpen: false,
    isAdding: false,
    isDragging: false
}

export const UIProvider = ({ children }: UIProviderInterface) => {

    const [state, dispatch] = useReducer(uiReducer, initialState)

    const openSideBar = () => {
        dispatch({ type: "OPEN_DRAWER" })

    }

    const closeSideBar = () => {
        dispatch({ type: "CLOSE_DRAWER" })
    }

    const setIsAdd = (isAdd : boolean) =>{
        dispatch({
            type:"IS_ADD_ENTRY",
            payload:isAdd
        })
    }

    const startDragging = ()=>{
        dispatch({
            type:"START_DRAGGING"
        })
    }

    const stopDragging = ()=>{
        dispatch({
            type:"STOP_DRAGGING"
        })
    }

    const { isSideBarOpen, isAdding, isDragging } = state

    return (
        <UIContext.Provider value={{
            isDragging,
            isSideBarOpen,
            startDragging,
            stopDragging,
            isAdding,
            openSideBar,
            closeSideBar,
            setIsAdd
        }}>
            {children}
        </UIContext.Provider>
    )
}


