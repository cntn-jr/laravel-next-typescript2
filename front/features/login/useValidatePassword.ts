export default function useValidatePassword() {
    const patternBigAlphabet = /[A-Z]/;
    const patternLittleAlphabet = /[a-z]/;
    const patternNumber = /[0-9]/;
    const pattern = /^[0-9A-Za-z]{8,32}$/;

    const isLengthOver = (loginUser: {
        email: string;
        password: string;
    }): boolean => {
        if (loginUser.password.length > 32) return true;
        return false;
    };

    const isLengthLessThan = (loginUser: {
        email: string;
        password: string;
    }): boolean => {
        if (loginUser.password.length < 8) return true;
        return false;
    };

    const isNotRegularExpression = (loginUser: {
        email: string;
        password: string;
    }): boolean => {
        return (
            !patternBigAlphabet.test(loginUser.password) ||
            !patternLittleAlphabet.test(loginUser.password) ||
            !patternNumber.test(loginUser.password) ||
            !pattern.test(loginUser.password)
        );
    };

    const isNotExactPassword = (loginUser: {
        email: string;
        password: string;
    }): boolean => {
        return (
            isLengthOver(loginUser) ||
            isLengthLessThan(loginUser) ||
            isNotRegularExpression(loginUser)
        );
    };

    return { isNotExactPassword };
}
