import { prefectures } from "@/types/Prefectures";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

type Props = {
    name: string;
    prefecture: prefectures;
    features?: Array<string>;
};

export default function CompanyCard(props: Props) {
    const { name, prefecture, features = [] } = props;
    const max_count_to_display_feature = 5;
    return (
        <Card
            sx={{
                height: "250px",
                border: "2px solid #ccc",
            }}
        >
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" component="div" noWrap={true}>
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {prefecture}
                    </Typography>
                    <Typography color="text.secondary">特徴</Typography>
                    {features
                        .filter(
                            (feature, index) =>
                                index < max_count_to_display_feature
                        )
                        .map((feature, index) => {
                            return (
                                <Typography noWrap={true} key={index}>
                                    ・{feature}
                                </Typography>
                            );
                        })}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
