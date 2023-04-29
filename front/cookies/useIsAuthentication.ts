import { useCookies } from "react-cookie";

export const useIsAuthentication = () => {
    const [cookies, setCookie] = useCookies(["isAuth"]);
    const getIsAuthentication = (): boolean => {
        if (cookies.isAuth) {
            return true;
        }
        setCookie("isAuth", false);
        return false;
    };
    const setIsAuthentication = (isAuth: boolean): void => {
        setCookie("isAuth", isAuth);
    };
    return { getIsAuthentication, setIsAuthentication };
};
