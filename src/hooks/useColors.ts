import {reactive} from "vue";
import {getList} from '../api/getList';

export default function useColors() {
    interface Icolor {
        hex: string;
        name: string;
        CMYK: number[];
        RGB: number[];
        pinyin: string;
    }

    const colors = reactive<Icolor[]>([])
    getList('color.json').then((res: any) => {
        Object.assign(colors, res.data)
    })
    return {colors}
}