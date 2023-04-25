import { AuthenticateApi } from "@/pages/api/AuthenticateApi";
import { useCookies } from "react-cookie";
import { useMutation } from "react-query";

export const useAuthenticate = () => {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['isAuth']);
    const { login } = AuthenticateApi();
    const loginMutation = useMutation(login, {
        onError: () => {},
        onSuccess: (data) => {
            console.log(data);
            setCookie("isAuth", true);
        },
        onSettled: () => {},
    });
    return { loginMutation };
};
