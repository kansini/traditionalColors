<script setup lang="ts">
import {ref} from "vue";
import TcModal from "./Modal.vue"
import ColorCardList from "@/components/colorList/List.vue"

const emit = defineEmits(["mouseenter", "clickItem"])
const showModal = ref(false)


const handleClickItem = (groupIndex: number, index: number) => {
  const length = 16
  const id: number = groupIndex * length + index
  emit("clickItem", id)
  setTimeout(() => {
    showModal.value = false
  })
}
</script>

<template>
  <div class="menu-trigger"
       @mouseenter="emit('mouseenter')"
       @click="showModal = true">
    <div></div>
  </div>
  <tc-modal v-model="showModal">
    <color-card-list @clickItem="handleClickItem"/>
  </tc-modal>
</template>

<style scoped lang="scss">
.menu-trigger {
  width: 24px;
  height: 24px;
  border-radius: 20px;
  border: 4px solid rgba(255, 255, 255, .6);
  mix-blend-mode: difference;
  transition: all ease-in .3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 2px solid rgba(255, 255, 255, .9);
    transform: scale(1.2);
  }

  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: rgba(255, 255, 255, .6);
  }
}
</style>