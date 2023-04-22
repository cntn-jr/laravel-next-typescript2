import { AppAuthLayout } from "@/components/template/AppAuthLayout";
import { LoginForm } from "@/features/login";

const login = () => {
    return (
        <AppAuthLayout>
            <LoginForm />
        </AppAuthLayout>
    );
};

export default login;
