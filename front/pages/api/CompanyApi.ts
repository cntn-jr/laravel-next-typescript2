import { axiosApp } from "@/plugin/axios";

export const CompanyApi = () => {
    const getCompanies = async () => {
        const { data } = await axiosApp.get("/api/company");
        return data;
    };
    return { getCompanies };
};
