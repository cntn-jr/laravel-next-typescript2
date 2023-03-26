import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginUserState {
    email: string;
    password: string;
}

const initialState: LoginUserState = { email: "", password: "" };

const loginUserSlice = createSlice({
    name: "loginUser",
    initialState,
    reducers: {
        changeEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        changePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        resetUser: (state) => {
            state = initialState;
        },
    },
});

export const { changeEmail, changePassword, resetUser } =
    loginUserSlice.actions;
export default loginUserSlice.reducer;
