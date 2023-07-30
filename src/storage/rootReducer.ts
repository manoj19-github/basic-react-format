import { combineReducers } from "@reduxjs/toolkit"
import globalReducer from "./globalSlices"
const rootReducer = combineReducers({
    global:globalReducer
})

export default rootReducer