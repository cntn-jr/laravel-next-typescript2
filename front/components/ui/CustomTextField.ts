import { AppColor } from "@/styles/AppColor";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const primary = styled(TextField)({
    "& label": {
        color: AppColor.other,
    },
    "& .MuiInput-underline:after": {
        // borderBottomColor: '',
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: AppColor.main,
        },
        "&:hover fieldset": {
            borderColor: AppColor.mainHover,
        },
        "&.Mui-focused fieldset": {
            borderColor: AppColor.accentFocus,
        },
    },
});

export const CustomTextField = {
    primary,
};
