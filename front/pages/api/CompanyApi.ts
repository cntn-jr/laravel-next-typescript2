import axios from "axios";

export const CompanyApi = () => {
    const getCompanies = async () => {
        const { data } = await axios.get("/api/company");
        return data;
    };
    return { getCompanies };
};
