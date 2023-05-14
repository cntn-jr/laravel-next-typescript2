import {
    useLoginForm,
    useValidateEmail,
    useValidatePassword,
} from "@/features/login";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { BasicBox } from "@/components/atoms/BasicBox";
import { CustomButton } from "@/components/ui/CustomButton";
import { CustomTextField } from "@/components/ui/CustomTextField";
import { selectLoginUserState } from "@/ducks/loginUserSlice";

export default function LoginForm() {
    const PrimaryTextField = CustomTextField.primary;
    const PrimaryLoadingButton = CustomButton.primaryLoading;
    const loginUser = useSelector(selectLoginUserState);
    const {
        onClickLoginButton,
        onChangeEmail,
        onChangePassword,
        isLoading,
        isError,
    } = useLoginForm();
    const { isNotExactEmail } = useValidateEmail();
    const { isNotExactPassword } = useValidatePassword();
    return (
        <BasicBox>
            <PrimaryTextField
                type="email"
                label="Email"
                fullWidth
                required
                margin="normal"
                inputProps={{ maxLength: 256 }}
                onChange={onChangeEmail}
                error={isError}
                disabled={isLoading}
            />
            <PrimaryTextField
                type="password"
                label="Password"
                fullWidth
                required
                margin="normal"
                inputProps={{ maxLength: 32 }}
                onChange={onChangePassword}
                error={isError}
                disabled={isLoading}
            />
            {isError && (
                <Alert variant="outlined" severity="error">
                    Incorrect email address or password!
                </Alert>
            )}

            <PrimaryLoadingButton
                onClick={onClickLoginButton}
                loading={isLoading}
                // disabled={
                //     isNotExactEmail(loginUser) || isNotExactPassword(loginUser)
                // }
            >
                Log in
            </PrimaryLoadingButton>
        </BasicBox>
    );
}
