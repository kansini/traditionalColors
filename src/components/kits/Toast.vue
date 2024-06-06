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
        class="tcc-toast inset-circle"
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
  width: 184px;
  height: 40px;
  left: calc(50% - 92px);
  display: flex;
  align-items: center;
  justify-content: center;
  //background: rgba(18, 161, 130, .8);
  backdrop-filter: blur(10px);
  color: #fff;
  z-index: 999;
  font-size: 13px;
  border-radius: 8px;
  filter:  drop-shadow(4px 4px 0 rgba(183, 174, 143, .5));

  &.inset-circle {
    background-size: 70% 70%;
    background-image: radial-gradient(
            circle at 100% 100%,
            transparent 0,
            transparent 8px,
            #b7ae8f 9px
    ),
    radial-gradient(
            circle at 0 0,
            transparent 0,
            transparent 8px,
            #b7ae8f 9px
    ),
    radial-gradient(
            circle at 100% 0,
            transparent 0,
            transparent 8px,
            #b7ae8f 9px
    ),
    radial-gradient(
            circle at 0 100%,
            transparent 0,
            transparent 8px,
            #b7ae8f 9px
    );
    background-repeat: no-repeat;
    background-position: right bottom, left top, right top, left bottom;
  }
}
</style>