<script setup lang="ts">
import useColors from "../hooks/useColors";
import {computed, ref} from "vue";
import CustomCursor from "./kits/CustomCursor.vue";
import ColorItem from "./ColorItem.vue";
import {Clipboard} from '../utils/clipboard';
import Toast from "./kits/Toast.vue";
import TcMenu from "../components/kits/Menu.vue";
// import Parallax from "./Parallax.vue";

const current = ref(0)
const currentId = ref(0)
const {colors} = useColors();
const cursorSize = ref('large')
const cursorColor = ref<number[]>([249, 244, 220])
const cursorText = ref('中國傳統色·Traditional Colors of China·')
const cursorInnerText = ref('乳白')


const length = computed(() => {
  return colors.length
})
const handleClick = () => {
  cursorColor.value = [colors[current.value].r, colors[current.value].g, colors[current.value].b]
  cursorInnerText.value = colors[current.value].name
}
const handleNext = () => {
  current.value++
  if (current.value >= length.value) {
    current.value = 0
  }
  handleClick()
  setTimeout(() => {
    currentId.value = current.value
    cursorInnerText.value = '下一个'
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
    cursorInnerText.value = '上一个'
  }, 500)
}
const showToast = ref(false)
const onClickItem = (color: any) => {
  Clipboard.copy(`${color.name}:${color.hex}`)
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 1500)
}
const copyContent = computed(() => {
  return `复制成功: ${colors[current.value]?.name}${colors[current.value]?.hex}`
})
const handleClickMenuItem = (id: number) => {
  current.value = id
  setTimeout(() => {
    currentId.value = current.value
  }, 500)
}
const onMouseenterMenu = () => {
  cursorSize.value = 'small'
  cursorInnerText.value = '录'
}
const onMouseenterPanel = () => {
  cursorSize.value = 'large'
  cursorInnerText.value = colors[current.value].name
}
</script>

<template>
  <tc-menu
      @mouseenter="onMouseenterMenu"
      @click-item="handleClickMenuItem"
  />
  <toast v-model="showToast" :content="copyContent"/>
  <custom-cursor
      :size="cursorSize"
      :text="cursorText"
      :color="cursorColor"
      :inner-text="cursorInnerText"
  />
  <div class="color-panel"
       :style="{background: colors[current]?.hex}"
       @mouseenter="onMouseenterPanel"
  >
    <div class="panel-nav-left"
         @click="handlePrev"
         @mouseenter="cursorInnerText = '上一个'"
         @mouseleave="cursorInnerText =  colors[current].name"
    ></div>
    <div class="panel-nav-right"
         @click="handleNext"
         @mouseenter="cursorInnerText = '下一个'"
         @mouseleave="cursorInnerText =  colors[current].name"
    ></div>
    <div class="color-panel-title">
      <div class="title-cn">中國傳統色</div>
      <div class="title-en">——· Traditional Chinese colors ·——</div>
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
  padding: 40px;
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
    font-size: 18px;
    width: 100%;
    text-align: center;
    mix-blend-mode: soft-light;

    .title-cn {
      font-size: 48px;
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