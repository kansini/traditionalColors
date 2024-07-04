export interface IColor {
    id?: number;
    hex: string;
    name: string;
    r: number;
    g: number;
    b: number;
    RGB: number[];
    pinyin: string;
    sentence: string;
    sentenceFrom: string;
}

export interface IColorByCategory {
    category: string;
    data: IColor[];
}