import { RootState } from "@/ducks/store";
import { useLoginForm } from "@/features/login/useLoginForm";
import { useSelector } from "react-redux";
import { BasicCard } from "../../components/atoms/BasicCard";
import { CustomButton } from "../../components/ui/CustomButton";
import { CustomTextField } from "../../components/ui/CustomTextField";
import { useValidateEmail } from "./useValidateEmail";
import { useValidatePassword } from "./useValidatePassword";

export const LoginForm = () => {
    const PrimaryTextField = CustomTextField.primary;
    const PrimaryLoadingButton = CustomButton.primaryLoading;
    const loginUser = useSelector((state: RootState) => state.loginUser);
    const { onClickLoginButton, onChangeEmail, onChangePassword, isLoading } =
        useLoginForm();
    const { isNotExactEmail } = useValidateEmail();
    const { isNotExactPassword } = useValidatePassword();
    return (
        <BasicCard>
            <PrimaryTextField
                type="email"
                label="Email"
                fullWidth
                required
                margin="normal"
                inputProps={{ maxLength: 256 }}
                onChange={onChangeEmail}
                // error={error}
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
                // error={error}
                disabled={isLoading}
            />
            <PrimaryLoadingButton
                onClick={onClickLoginButton}
                loading={isLoading}
                disabled={
                    isNotExactEmail(loginUser) || isNotExactPassword(loginUser)
                }
            >
                Log in
            </PrimaryLoadingButton>
        </BasicCard>
    );
};
