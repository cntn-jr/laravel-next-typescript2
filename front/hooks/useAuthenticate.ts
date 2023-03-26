import { AuthenticateApi } from "@/pages/api/AuthenticateApi";
import { useMutation } from "react-query";

export const useAuthenticate = () => {
    const { login } = AuthenticateApi();
    const loginMutation = useMutation(login, {
        onError: () => {},
        onSuccess: (data) => {
            console.log(data);
        },
        onSettled: () => {},
    });
    return { loginMutation };
};
