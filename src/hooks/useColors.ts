import {reactive} from "vue";
import {getList} from '../api/getList';

export default function useColors() {
    interface IColor { // 注意接口名称首字母大写，遵循TS命名规范
        id?: number;
        hex: string;
        name: string;
        CMYK: number[];
        RGB: number[];
        pinyin: string;
    }

    const colors = reactive<IColor[]>([])

    getList('color.json').then((res: any) => {
        // 使用map来处理数据，并为每个元素添加id属性
        const colorDataWithIds = res.data.map((color: IColor, index: number) => ({
            ...color,
            id: index, // 添加id属性，值为当前下标
        }));

        Object.assign(colors, colorDataWithIds);
    });

    return {colors};
}
