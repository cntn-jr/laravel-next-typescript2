import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ducks/store";
import { useAuthenticate } from "@/hooks/useAuthenticate";
import axios from "axios";
import { ChangeEvent } from "react";
import { changeEmail, changePassword } from "@/ducks/loginUserSlice";

export const useLoginForm = () => {
    const loginUser = useSelector((state: RootState) => state.loginUser);
    const dispatch = useDispatch();
    const { loginMutation } = useAuthenticate();

    const onClickLoginButton = () => {
        axios.get("/sanctum/csrf-cookie").then(() => {
            loginMutation.mutate({
                email: loginUser.email,
                password: loginUser.password,
            });
        });
    };

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeEmail(e.target.value));
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changePassword(e.target.value));
    };

    return {
        onClickLoginButton,
        onChangeEmail,
        onChangePassword,
    };
};
