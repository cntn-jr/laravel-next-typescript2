import { Grid } from "@mui/material";
import CompanyCard from "./CompanyCard";

export default function CompanyList() {
    return (
        <Grid container spacing={2}>
            {new Array(4).fill("").map((val, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CompanyCard
                        name="株式会社ノースディテール"
                        prefecture="北海道"
                        features={[
                            "IT",
                            "PHP",
                            "Webアプリ作成",
                            "フレックスタイム制",
                            "自社開発",
                        ]}
                    />
                </Grid>
            ))}
            {new Array(4).fill("").map((val, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CompanyCard
                        name="株式会社デジタルインフォメーションテクノロジー"
                        prefecture="愛媛県"
                        features={[
                            "IT",
                            "Java",
                            "SESあり",
                            "スーツ",
                            "本社東京都",
                            "DIT",
                            "おすすめ",
                        ]}
                    />
                </Grid>
            ))}
            {new Array(4).fill("").map((val, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CompanyCard name="ブラック" prefecture="沖縄県" />
                </Grid>
            ))}
        </Grid>
    );
}
