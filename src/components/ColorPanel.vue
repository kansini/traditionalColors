<script setup lang="ts">
import useColors from "../hooks/useColors";
import {computed, ref} from "vue";
import Parallax from "./Parallax.vue";

const current = ref(0)
const {colors} = useColors();
const length = computed(() => {
  return colors.length
})
const handleClick = () => {
  current.value++
  if (current.value >= length.value) {
    current.value = 0
  }
}
</script>

<template>
  <div class="color-panel" @click="handleClick" :style="{background: colors[current]?.hex}">
    <div class="color-panel-title">中国传统色彩</div>
    <div class="color-panel-container">
      <parallax>
        <div class="color-title">
          <div class="color-title-text">
            {{ colors[current]?.name }}
          </div>
        </div>
      </parallax>
    </div>
  </div>
</template>

<style scoped lang="scss">
.color-panel {
  padding: 40px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  cursor: pointer;
  transition: all ease-in 1s;

  .color-panel-title {
    font-size: 20px;
    width: 100%;
    text-align: center;
  }

  .color-panel-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .color-title {
      display: flex;
      height: max-content;
      justify-content: center;
      padding: 16px 12px;
      line-height: 1.2;
      border: 1px solid rgba(0, 0, 0, 1);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 1), 0 0 0 1px rgba(255, 255, 255, 1), 0 0 0 4px rgba(0, 0, 0, 1);

      .color-title-text {
        font-size: 32px;
        width: 32px;
        font-weight: 600;
      }
    }
  }


}
</style>