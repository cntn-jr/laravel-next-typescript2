import { AppLayout } from "@/components/template/AppLayout";
import { CompanyList } from "@/features/company/list";
import { CompanyApi } from "../api/CompanyApi";
import { Company } from "@/types/Company";

type Props = {
    companies: Company[];
};

const list = (props: Props) => {
    const { companies } = props;
    return (
        <AppLayout>
            <CompanyList companies={companies} />
        </AppLayout>
    );
};

export async function getStaticProps() {
    const { getCompanies } = CompanyApi();
    const companies = await getCompanies();
    return {
        props: {
            companies,
        },
    };
}

export default list;
