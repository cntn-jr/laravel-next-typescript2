import { useIsAuthentication } from "@/cookies/useIsAuthentication";
import { AuthenticateApi } from "@/pages/api/AuthenticateApi";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

export const useAuthenticate = () => {
    const router = useRouter();
    const { login } = AuthenticateApi();
    const { setIsAuthentication } = useIsAuthentication();
    const loginMutation = useMutation(login, {
        onError: () => {},
        onSuccess: () => {
            setIsAuthentication(true);
            router.push("/company/list");
        },
        onSettled: () => {},
    });
    return { loginMutation };
};
