import {defineStore} from "pinia";

const defaultState = {
    text: "中国传统色·Traditional Colors of China·",
    size: "large",
    innerText: "诗词",
    color: [249, 244, 220]
}
export const useCursorStore = defineStore("cursor", {
    state: () => ({
        text: "中国传统色·Traditional Colors of China·",
        size: "large",
        innerText: "诗词",
        color: [249, 244, 220]
    }),
    actions: {
        setCursor(size: string = "large", innerText: string = "诗词", text: string = defaultState.text) {
            if (size === "default") {
                this.innerText = defaultState.innerText;
                this.size = defaultState.size;
                this.text = defaultState.text;
                this.color = defaultState.color;
            } else {
                this.innerText = innerText;
                this.size = size;
                this.text = text;
            }

        }
    }
})