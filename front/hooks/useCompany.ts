import { CompanyApi } from "@/pages/api/CompanyApi";
import { useQuery } from "react-query";

export const useCompany = () => {
    const { getCompanies } = CompanyApi();
    const companyQuery = useQuery("companies", getCompanies);
    return { companyQuery };
};
