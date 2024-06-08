<script setup lang="ts">
import TcMenu from "./kits/Menu.vue"
import GithubIcon from "./kits/GithubIcon.vue";
import FullscreenTrigger from "./kits/FullscreenTrigger.vue";

defineProps({
  color: {
    type: Array,
    default: () => [0, 0, 0]
  }
})

const emit = defineEmits(["mouseenter", "clickItem"])
const handleClickItem = (id: number) => {
  emit("clickItem", id)
}
const onMouseenter = (name: string) => {
  emit("mouseenter", name)
}
</script>

<template>
  <div class="bav-bar">
    <tc-menu @mouseenter="onMouseenter('录')" @click-item="handleClickItem"/>
    <fullscreen-trigger @mouseenter="onMouseenter('全')"/>
    <github-icon @mouseenter="onMouseenter('庫')" :color="color"/>
  </div>
</template>

<style scoped lang="scss">
.bav-bar {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 16px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 999;
}
</style>