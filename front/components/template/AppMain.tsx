import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export const AppMain = (props: Props) => {
    const { children } = props;
    return <Box>{children}</Box>;
};
