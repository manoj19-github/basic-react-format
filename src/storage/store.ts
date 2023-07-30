import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import thunk from "redux-thunk"
import initialState from "./initialState"

const store = configureStore({
    reducer:rootReducer,
    middleware: [thunk],
    preloadedState: initialState,
    devTools:process.env.NODE_ENV === "development",

})

export default store