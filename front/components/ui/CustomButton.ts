import { AppColor } from "@/styles/AppColor";
import { LoadingButton } from "@mui/lab";
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
    "&:disabled": {
        backgroundColor: AppColor.disabled,
    },
});

const primaryLoading = styled(LoadingButton)({
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
    "&:disabled": {
        backgroundColor: AppColor.disabled,
    },
});

export const CustomButton = {
    primary,
    primaryLoading,
};
