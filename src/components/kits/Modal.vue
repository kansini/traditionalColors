<script setup lang="ts">
import {useCursorStore} from "@/store";

const cursorStore = useCursorStore();
const show = defineModel()
const onClose = () => {
  show.value = false
  cursorStore.setCursor("default")
}
</script>

<template>
  <teleport to="body">
    <transition name="fadeUp">
      <div class="tc-modal" v-if="show">
        <div class="tc-modal-header">
          <div class="tc-modal-close" @click="onClose">
            <span>×</span>
          </div>
        </div>
        <div class="tc-modal-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped lang="scss">
.tc-modal {
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: rgba(255, 255, 255, .8);
  backdrop-filter: saturate(120%) blur(6px);

  .tc-modal-header {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .tc-modal-close {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      cursor: pointer;
      transition: all ease-in .3s;

      &:hover {
        transform: rotate(90deg);
      }
    }
  }

  .tc-modal-content {
    width: 100%;
    height: calc(100% - 40px);
    overflow: auto;
  }
}
</style>