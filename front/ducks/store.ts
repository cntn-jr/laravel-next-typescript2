import { configureStore } from "@reduxjs/toolkit"
import LoginUserReducer from "./LoginUserSlice"

export const store = configureStore({
    reducer: {
        loginUser: LoginUserReducer,
    },
})
