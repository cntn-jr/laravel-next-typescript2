import { Grid } from "@mui/material";
import CompanyCard from "./CompanyCard";

export default function CompanyList() {
    return (
        <Grid container spacing={2}>
            {new Array(13).fill("").map((val, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CompanyCard />
                </Grid>
            ))}
        </Grid>
    );
}
