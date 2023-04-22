import { Card, CardContent, Typography } from "@mui/material";

export default function CompanyCard() {
    return (
        <Card
            sx={{
                height: "250px",
                border: "3px solid #ccc",
                cursor: "pointer",
            }}
        >
            <CardContent>
                <Typography variant="h5" component="div" noWrap={true}>
                    株式会社ノースディテール
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    北海道
                </Typography>
                <Typography color="text.secondary">特徴</Typography>
                <Typography noWrap={true}>・IT</Typography>
                <Typography noWrap={true}>・Webアプリ作成</Typography>
                <Typography noWrap={true}>・PHP</Typography>
                <Typography noWrap={true}>・フレックスタイム制</Typography>
                <Typography noWrap={true}>・自社開発</Typography>
            </CardContent>
        </Card>
    );
}
