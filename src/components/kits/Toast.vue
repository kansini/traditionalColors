<script setup lang="ts">
import {onClickOutside} from '@vueuse/core'
import {ref} from "vue";

const toastRef = ref()
const show = defineModel()
defineProps({
  content: {
    type: String,
    default: ''
  }
})
onClickOutside(toastRef, () => show.value = false)
</script>

<template>
  <transition name="fadeDown">
    <div
        ref="toastRef"
        class="tcc-toast"
        v-if="show"
    >
      {{ content }}
    </div>
  </transition>
</template>

<style scoped lang="scss">
.tcc-toast {
  position: fixed;
  top: 16px;
  width: 160px;
  height: 40px;
  left: calc(50% - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(18, 161, 130, .8);
  backdrop-filter: blur(10px);
  color: #fff;
  z-index: 999;
  font-size: 13px;
  border-radius: 40px;
}
</style>