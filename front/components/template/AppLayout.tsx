import { Box, Container, Grid } from "@mui/material";
import { AppFooter, AppHeader, AppMain, AppSidebar } from "../atoms/app/";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const AppLayout = (props: Props) => {
    const { children } = props;
    return (
        <Box display="flex">
            <AppHeader />
            <Grid mt="60px" display="flex" container spacing={0}>
                <AppSidebar />
                <Grid
                    component="main"
                    item
                    container
                    sx={{
                        height: "100vh",
                    }}
                    xs={9}
                >
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <AppMain>{children}</AppMain>
                        <AppFooter />
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
};
