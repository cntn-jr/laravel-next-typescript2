import { configureStore } from "@reduxjs/toolkit";
import LoginUserReducer from "./loginUserSlice";

export const store = configureStore({
    reducer: {
        loginUser: LoginUserReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
