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
    <div class="menu-list">
      <div class="menu-group" v-for="(group, groupIndex) in colorsByCategory">
        <div class="menu-group-title">{{ group.category }}</div>
        <div
            class="menu-item"
            v-for="(item,index) in group.data"
            :style="{background: item.hex}"
            @click="handleClickItem(groupIndex,index)">
          {{ item.name }}
        </div>
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

.menu-list {
  display: flex;
  flex-wrap: wrap;
  //justify-content: center;
  gap: 40px;

  .menu-group {
    display: flex;
    gap: 8px;
    align-items: center;

    .menu-group-title {
      font-size: 20px;
      writing-mode: vertical-rl;
    }

    .menu-item {
      cursor: pointer;
      writing-mode: vertical-rl;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 72px;
      border-radius: 8px;
      color: #fff;
      opacity: .6;
      transition: all ease-in .4s;

      &:hover {
        opacity: 1;
        border-radius: 16px;
        transform: translateY(-8px);
      }
    }
  }
}

</style>