import { prefectures } from "./Prefectures";

export type Company = {
    id: number;
    name: string;
    prefecture: prefectures;
    created_at: string;
    updated_at: string;
    features: Array<any>;
};
