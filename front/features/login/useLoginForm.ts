import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ducks/store";
import { useAuthenticate } from "@/hooks/useAuthenticate";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { changeEmail, changePassword } from "@/ducks/loginUserSlice";

export default function useLoginForm() {
    const loginUser = useSelector((state: RootState) => state.loginUser);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const { loginMutation } = useAuthenticate();

    const onClickLoginButton = () => {
        setLoading(true);
        axios.get("/sanctum/csrf-cookie").then(() => {
            loginMutation
                .mutateAsync({
                    email: loginUser.email,
                    password: loginUser.password,
                })
                .catch(() => {
                    setIsError(true);
                })
                .finally(() => {
                    setLoading(false);
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
        isLoading,
        isError,
        onClickLoginButton,
        onChangeEmail,
        onChangePassword,
    };
}
