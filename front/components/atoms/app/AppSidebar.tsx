import { Grid } from "@mui/material";

export default function AppSidebar() {
    return (
        <Grid
            item
            sx={{
                height: "100vh",
                borderRight: ".5px #ddd solid",
            }}
            xs={3}
        >
            {/* <Sidebar /> */}
        </Grid>
    );
}
