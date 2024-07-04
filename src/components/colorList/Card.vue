<script setup lang="ts" name="color-card">
import {IColor} from "@/types";
import {useCursorStore} from "@/store";

const cursorStore = useCursorStore();

defineProps({
  color: {
    type: Object as () => IColor,
    default: () => ({}),
  },
})
const emit = defineEmits(["click"])
const onClick = () => {
  emit("click")
}
</script>

<template>
  <div
      class="color-card"
      @click="onClick"
      @mouseenter="cursorStore.setCursor('large',color.name)"
  >
    <div class="color-card-swatch" :style="{ background: color.hex}"></div>
    <div class="color-card-desc">
      <div class="title">{{ color.name }}</div>
      <div class="hex">{{ color.hex }}</div>
      <div class="rgb">rgb({{ color.r }},{{ color.g }},{{ color.b }})</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.color-card {
  width: calc(12.5% - 16px);
  aspect-ratio: 16/9;
  background: #fff;
  border-radius: 8px;
  padding: 8px;
  transition: all ease-in .5s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 12px -4px rgba(184, 184, 210, 0.20);
  }

  .color-card-swatch {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 6px;
  }

  .color-card-desc {
    div {
      margin: 8px 0;
    }
  }
}

@media (max-width: 768px) {
  .color-card {
    width: calc(50% - 16px);
  }
}
</style>