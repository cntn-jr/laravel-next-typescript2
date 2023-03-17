import { AppColor } from "@/styles/AppColor";
import { AppBar, Box, Typography } from "@mui/material";

export const AppHeader = () => {
    return (
        <AppBar
            position="absolute"
            sx={{ color: "#444", backgroundColor: AppColor.main }}
        >
            <Box height="60px" display="flex">
                <Typography
                    component="h1"
                    variant="h5"
                    pt="20px"
                    pb="10px"
                    pl="80px"
                    fontWeight="bold"
                    justifyContent="center"
                >
                    TaskManager
                </Typography>
            </Box>
        </AppBar>
    );
};
