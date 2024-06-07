<script setup lang="ts">
import {ref} from "vue";
import TcModal from "./Modal.vue"
import useColors from "../../hooks/useColors.ts";

const emit = defineEmits(["mouseenter", "clickItem"])
const showModal = ref(false)

const {colorsByCategory} = useColors()
const handleClickItem = (groupIndex: number, index: number) => {
  const length = 16
  const id: number = groupIndex * length + index
  emit("clickItem", id)
}
</script>

<template>
  <div class="menu-trigger"
       @mouseenter="emit('mouseenter')"
       @click="showModal = true">
    <div></div>
  </div>
  <tc-modal v-model="showModal">
    <div v-for="(group, groupIndex) in colorsByCategory">
      <h2>{{ group.category }}</h2>
      <div
          class="menu-item"
          v-for="(item,index) in group.data"
          @click="handleClickItem(groupIndex,index)">
        {{ item.name }}
      </div>
    </div>
  </tc-modal>
</template>

<style scoped lang="scss">
.menu-trigger {
  position: fixed;
  top: 0;
  right: 0;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;

  div {
    width: 24px;
    height: 24px;
    border-radius: 20px;
    border: 5px solid rgba(255, 255, 255, .6);
    mix-blend-mode: difference;
    transition: all ease-in .3s;
  }

  &:hover {
    div {
      border: 4px solid rgba(255, 255, 255, .9);
      transform: scale(1.5);
    }
  }
}

.menu-item {
  cursor: pointer;
}
</style>