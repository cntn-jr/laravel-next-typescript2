import { Box, Container, Grid } from "@mui/material";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";

import { AppMain } from "./AppMain";
import { ReactNode } from "react";
import { AppColor } from "@/styles/AppColor";

type Props = {
    children: ReactNode;
};

export const AppAuthLayout = (props: Props) => {
    const { children } = props;
    return (
        <Box display="flex" sx={{ backgroundColor: AppColor.back }}>
            <AppHeader />
            <Grid
                mt="60px"
                display="flex"
                container
                component="main"
                spacing={0}
                sx={{
                    height: "100vh",
                }}
            >
                <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                    <AppMain>{children}</AppMain>
                    <AppFooter />
                </Container>
            </Grid>
        </Box>
    );
};
