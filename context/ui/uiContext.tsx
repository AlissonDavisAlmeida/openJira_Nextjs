import { createContext, Dispatch } from "react";

interface UIContextInterface {
    isSideBarOpen: boolean;
    setIsSideBarOpen: Dispatch<{type:string, payload?:any}>
}

export const UIContext = createContext<UIContextInterface>({
    isSideBarOpen: false,
    setIsSideBarOpen: () => {}
});

