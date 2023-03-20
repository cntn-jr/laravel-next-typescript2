import { changeEmail, changePassword } from "@/ducks/loginUserSlice";
import { RootState } from "@/ducks/store";
import { useLoginForm } from "@/features/login/useLoginForm";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasicCard } from "../../components/atoms/BasicCard";
import { CustomButton } from "../../components/ui/CustomButton";
import { CustomTextField } from "../../components/ui/CustomTextField";
import { useValidateEmail } from "./useValidateEmail";
import { useValidatePassword } from "./useValidatePassword";

export const LoginForm = () => {
    const PrimaryTextField = CustomTextField.primary;
    const PrimaryButton = CustomButton.primary;
    const dispatch = useDispatch();
    const loginUser = useSelector((state: RootState) => state.loginUser);
    const { onClickLoginButton } = useLoginForm();
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
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    dispatch(changeEmail(e.target.value));
                }}
                // error={error}
                // disabled={loading}
            />
            <PrimaryTextField
                type="password"
                label="Password"
                fullWidth
                required
                margin="normal"
                inputProps={{ maxLength: 32 }}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    dispatch(changePassword(e.target.value))
                }
                // error={error}
                // disabled={loading}
            />
            <PrimaryButton
                onClick={onClickLoginButton}
                disabled={
                    isNotExactEmail(loginUser) || isNotExactPassword(loginUser)
                }
            >
                Log in
            </PrimaryButton>
        </BasicCard>
    );
};
