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
      @mouseenter="cursorStore.setCursor('small',color.name)"
  >
    <div class="color-card-swatch" :style="{ background: color.hex}">
      <div class="color-sentence">{{ color.sentence }}</div>
    </div>
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


  .color-card-swatch {
    display: flex;
    justify-content: flex-end;
    padding: 8px;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 6px;
    transition: all ease-in .3s;

    .color-sentence {
      color: #fff;
      font-size: 12px;
      line-height: 1.5;
      writing-mode: vertical-rl;
      mix-blend-mode: overlay;
      opacity: 0;
      transition: all ease-in .3s;
    }
  }

  &:hover {
    box-shadow: 0 8px 12px -4px rgba(184, 184, 210, 0.20);
    transform: scale(1.4);

    .color-sentence {
      opacity: 1;
    }

  }

  .color-card-desc {
    font-size: 12px;
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