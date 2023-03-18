import { changeEmail, changePassword } from "@/ducks/loginUserSlice";
import { useLoginForm } from "@/features/login/useLoginForm";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { BasicCard } from "../../components/atoms/BasicCard";
import { CustomButton } from "../../components/ui/CustomButton";
import { CustomTextField } from "../../components/ui/CustomTextField";

export const LoginForm = () => {
    const BasicTextField = CustomTextField.primary;
    const BasicButton = CustomButton.primary;
    const dispatch = useDispatch();
    const { onClickLoginButton } = useLoginForm();
    return (
        <BasicCard>
            <BasicTextField
                type="email"
                label="Email"
                fullWidth
                required
                margin="normal"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    dispatch(changeEmail(e.target.value));
                }}
                // error={error}
                // disabled={loading}
            />
            <BasicTextField
                type="password"
                label="Password"
                fullWidth
                required
                margin="normal"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    dispatch(changePassword(e.target.value))
                }
                // error={error}
                // disabled={loading}
            />
            <BasicButton onClick={onClickLoginButton}>Log in</BasicButton>
        </BasicCard>
    );
};
