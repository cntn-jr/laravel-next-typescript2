import { BasicCard } from "@/components/atoms/BasicCard"
import { CustomButton } from "@/components/CustomStyles/CustomButton"
import { CustomTextField } from "@/components/CustomStyles/CustomTextField"
import { AppAuthLayout } from "@/components/template/AppAuthLayout"

const login = () => {
    const BasicTextField = CustomTextField.basic
    const BasicButton = CustomButton.basic
    return (
        <AppAuthLayout>
            <BasicCard>
                <BasicTextField
                    type="email"
                    label="Email"
                    fullWidth
                    required
                    margin="normal"
                    // onChange={changeEmail}
                    // error={error}
                    // disabled={loading}
                />
                <BasicTextField
                    type="password"
                    label="Password"
                    fullWidth
                    required
                    margin="normal"
                    // onChange={changePassword}
                    // error={error}
                    // disabled={loading}
                />
                <BasicButton>Log in</BasicButton>
            </BasicCard>
        </AppAuthLayout>
    )
}

export default login
