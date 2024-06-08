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
        <div class="menu-item-list">
          <div
              class="menu-item"
              v-for="(item,index) in group.data"
              :style="{background: item.hex}"
              @click="handleClickItem(groupIndex,index)">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
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

.menu-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 32px;
  justify-content: center;

  .menu-group {
    display: flex;
    gap: 24px 16px;
    align-items: center;

    .menu-group-title {
      font-size: 20px;
      width: 20px;
    }

    .menu-item-list {
      display: flex;
      gap: 0 16px;

      .menu-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 60px;
        font-size: 12px;
        border-radius: 8px;
        color: #fff;
        opacity: .6;
        transition: all ease-in .4s;

        span {
          width: 12px;
          transition: all ease-in .4s;
        }

        &:hover {
          opacity: 1;
          border-radius: 16px;
          transform: scale(1.8) ;

          span {
            mix-blend-mode: difference;
          }
        }
      }
    }

  }
}

</style>