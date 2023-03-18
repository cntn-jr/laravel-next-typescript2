import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/ducks/store";
import { useAuthenticate } from "@/hooks/useAuthenticate";
import axios from "axios";

export const useLoginForm = () => {
    const loginUser = useSelector((state: RootState) => state.loginUser);
    const { loginMutation } = useAuthenticate();
    const onClickLoginButton = () => {
        axios.get("/sanctum/csrf-cookie").then(() => {
            loginMutation.mutate({
                email: loginUser.email,
                password: loginUser.password,
            });
        });
    };
    return {
        onClickLoginButton,
    };
};
