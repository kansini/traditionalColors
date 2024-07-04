import {reactive} from "vue";
import {getList} from "../api/getList";
import {IColor, IColorByCategory} from "@/types";

export default function useColors() {


    const colors = reactive<IColor[]>([])
    const colorsByCategory = reactive<IColorByCategory[]>([])

    getList("colorList.json").then((res: any) => {
        Object.assign(colorsByCategory, res.data)
        // console.log('colorsByCategory', colorsByCategory)
        const result = res.data.flatMap((item: any) => item.data)
        // 使用map来处理数据，并为每个元素添加id属性
        const colorDataWithIds = result.map((color: IColor, index: number) => ({
            ...color,
            id: index, // 添加id属性，值为当前下标
        }));

        Object.assign(colors, colorDataWithIds);
        // console.log('colors', colors)
    });

    return {
        colors,
        colorsByCategory
    };
}
