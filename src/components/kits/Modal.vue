<script setup lang="ts">
const show = defineModel()
</script>

<template>
  <transition name="fadeRight">
    <div class="tc-modal" v-if="show">
      <div class="tc-modal-header">
        <div class="tc-modal-close" @click="show = false">
          <span>×</span>
        </div>
      </div>
      <div class="tc-modal-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.tc-modal {
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: rgba(255, 255, 255, .1);
  backdrop-filter: blur(10px);

  .tc-modal-header {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .tc-modal-close {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>