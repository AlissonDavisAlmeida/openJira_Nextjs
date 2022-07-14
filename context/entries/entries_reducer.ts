import { Reducer } from "react";
import { State } from "./";


export const entriesReducer: Reducer<State,{type:string, payload?:any}> = (state, action) => {

    switch(action.type){
       

        default:
            return state;
    }
}