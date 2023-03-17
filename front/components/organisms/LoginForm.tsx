import { changeEmail, changePassword } from "@/ducks/loginUserSlice";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { BasicCard } from "../atoms/BasicCard";
import { CustomButton } from "../CustomStyles/CustomButton";
import { CustomTextField } from "../CustomStyles/CustomTextField";

export const LoginForm = () => {
    const BasicTextField = CustomTextField.basic;
    const BasicButton = CustomButton.basic;
    const dispatch = useDispatch();
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
            <BasicButton>Log in</BasicButton>
        </BasicCard>
    );
};
