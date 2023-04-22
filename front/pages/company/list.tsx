import { AppLayout } from "@/components/template/AppLayout";
import { CompanyList } from "@/features/company/list";

const list = () => {
    return (
        <AppLayout>
            <CompanyList />
        </AppLayout>
    );
};

export default list;
