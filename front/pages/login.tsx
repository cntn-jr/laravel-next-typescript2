import { LoginForm } from "@/components/organisms/LoginForm";
import { AppAuthLayout } from "@/components/template/AppAuthLayout";

const login = () => {
    return (
        <AppAuthLayout>
            <LoginForm />
        </AppAuthLayout>
    );
};

export default login;
