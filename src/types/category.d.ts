export interface SubCategory {
    title: string;
    type: string;
    active: boolean;
}

export interface Categories {
    title: string;
    subTitle?: SubCategory[];
    type: string;
}