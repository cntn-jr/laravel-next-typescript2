import { AppColor } from "@/styles/AppColor";
import { Button, styled } from "@mui/material";

const primary = styled(Button)({
    color: "#fff",
    backgroundColor: AppColor.accent,
    borderColor: AppColor.accent,
    "&:hover": {
        backgroundColor: AppColor.accentHover,
        borderColor: AppColor.accent,
        boxShadow: "none",
    },
    "&:active": {},
    "&:focus": {
        backgroundColor: AppColor.accentFocus,
    },
});

export const CustomButton = {
    primary,
};
