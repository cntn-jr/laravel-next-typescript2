export default function useValidateEmail() {
    const pattern =
        /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

    const isLengthOver = (loginUser: {
        email: string;
        password: string;
    }): boolean => {
        if (loginUser.email.length > 256) return true;
        return false;
    };

    const isLengthLessThan = (loginUser: {
        email: string;
        password: string;
    }): boolean => {
        if (loginUser.email.length < 0) return true;
        return false;
    };

    const isNotRegularExpression = (loginUser: {
        email: string;
        password: string;
    }): boolean => {
        return !pattern.test(loginUser.email);
    };

    const isNotExactEmail = (loginUser: {
        email: string;
        password: string;
    }): boolean => {
        return (
            isLengthOver(loginUser) ||
            isLengthLessThan(loginUser) ||
            isNotRegularExpression(loginUser)
        );
    };

    return { isNotExactEmail };
}
