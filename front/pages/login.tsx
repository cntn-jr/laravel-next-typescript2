import { LoginForm } from "@/features/login/LoginForm";
import { AppAuthLayout } from "@/components/template/AppAuthLayout";

const login = () => {
    return (
        <AppAuthLayout>
            <LoginForm />
        </AppAuthLayout>
    );
};

export default login;
