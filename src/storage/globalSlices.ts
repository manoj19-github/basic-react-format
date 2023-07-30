import {createSlice} from "@reduxjs/toolkit"
import GlobalInterface from "../models/globalModel"
import initialState from "./initialState"

const globalInitState:GlobalInterface = initialState.global

export const globalSlice = createSlice({
    name:"global",
    initialState:globalInitState,
    reducers:{
        setMode:(state: { mode: string })=>{
            state.mode = state.mode === 'light' ?'dark':'light'
        }
    }
})

export const {setMode} = globalSlice.actions;
export default globalSlice.reducer;