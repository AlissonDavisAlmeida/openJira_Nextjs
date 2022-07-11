import { createContext, Dispatch } from "react";

interface UIContextInterface {
    isSideBarOpen: boolean;
    openSideBar:()=>void;
    closeSideBar:()=>void;
}

export const UIContext = createContext<UIContextInterface>({} as UIContextInterface);

