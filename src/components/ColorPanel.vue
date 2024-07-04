<script setup lang="ts">
import useColors from "../hooks/useColors";
import {computed, ref} from "vue";
import CustomCursor from "./kits/CustomCursor.vue";
import ColorItem from "./ColorItem.vue";
import {Clipboard} from "../utils/clipboard";
import Toast from "./kits/Toast.vue";
import NavBar from "./NavBar.vue";
import {useCursorStore} from "@/store";

const cursorStore = useCursorStore();

const current = ref(0)
const currentId = ref(0)
const {colors} = useColors();


const length = computed(() => {
  return colors.length
})
const handleClick = () => {
  cursorStore.color = [colors[current.value].r, colors[current.value].g, colors[current.value].b]
  cursorStore.innerText = colors[current.value].name
}
const handleNext = () => {
  current.value++
  if (current.value >= length.value) {
    current.value = 0
  }
  handleClick()
  setTimeout(() => {
    currentId.value = current.value
    cursorStore.innerText = "下一个"
  }, 500)
}
const handlePrev = () => {
  current.value--
  if (current.value < 0) {
    current.value = length.value - 1
  }
  handleClick()
  setTimeout(() => {
    currentId.value = current.value
    cursorStore.innerText = "上一个"
  }, 500)
}
const showToast = ref(false)
const onClickItem = (color: any) => {
  Clipboard.copy(`${color.hex}`)
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false
  }, 1500)
}
const copyContent = computed(() => {
  return `复制成功: ${colors[current.value]?.name}${colors[current.value]?.hex}`
})
const handleClickMenuItem = (id: number) => {
  current.value = id
  handleClick()
  setTimeout(() => {
    currentId.value = current.value

  }, 500)
}
const onMouseenterMenu = (name: string) => {
  cursorStore.size = "small"
  cursorStore.innerText = name
}
const onMouseenterPanel = () => {
  cursorStore.size = "large"
  cursorStore.innerText = colors[current.value].name
}
</script>

<template>
  <nav-bar
      :color="cursorStore.color"
      @mouseenter="onMouseenterMenu"
      @click-item="handleClickMenuItem"
  />
  <toast v-model="showToast" :content="copyContent"/>
  <custom-cursor
      :size="cursorStore.size"
      :text="cursorStore.text"
      :color="cursorStore.color"
      :inner-text="cursorStore.innerText"
  />
  <div class="color-panel"
       :style="{background: colors[current]?.hex}"
       @mouseenter="onMouseenterPanel"
  >
    <div class="panel-nav-left"
         @click="handlePrev"
         @mouseenter="cursorStore.innerText = '上一个'"
         @mouseleave="cursorStore.innerText =  colors[current].name"
    ></div>
    <div class="panel-nav-right"
         @click="handleNext"
         @mouseenter="cursorStore.innerText = '下一个'"
         @mouseleave="cursorStore.innerText =  colors[current].name"
    ></div>
    <div class="color-panel-title">
      <div class="title-cn">中國傳統色</div>
      <div class="title-en">——· Traditional Colors of China ·——</div>
    </div>
    <div class="color-panel-container">
      <color-item
          @click="onClickItem(colors[current])"
          :title="colors[current]?.name"
          :sentence="colors[current]?.sentence"
          :from="colors[current]?.sentenceFrom"
          :show="currentId === colors[current]?.id"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.color-panel {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  cursor: pointer;
  transition: all ease-in 1.2s;

  [class^="panel-nav-"] {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 45%;
  }

  .panel-nav-left {
    left: 0;
  }

  .panel-nav-right {
    right: 0;
  }

  .color-panel-title {
    padding: 40px;
    font-size: 20px;
    width: 100%;
    text-align: center;
    mix-blend-mode: soft-light;

    .title-cn {
      font-size: 40px;
      letter-spacing: 16px;
      margin-bottom: 8px;
    }

    .title-en {
      font-family: "carved", serif;
    }
  }

  .color-panel-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }


}
</style>