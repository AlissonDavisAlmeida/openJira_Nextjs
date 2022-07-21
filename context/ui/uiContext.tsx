import { createContext, Dispatch } from "react";

interface UIContextInterface {
    isSideBarOpen: boolean;
    isAdding: boolean;
    isDragging: boolean;
    openSideBar:()=>void;
    closeSideBar:()=>void;
    setIsAdd:(isAdd:boolean)=>void;
    startDragging:()=>void;
    stopDragging:()=>void;
}

export const UIContext = createContext<UIContextInterface>({} as UIContextInterface);

