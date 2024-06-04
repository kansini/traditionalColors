<script setup lang="ts">
import ColorPanel from "../components/ColorPanel.vue";
import CustomCursor from "../components/kits/CustomCursor.vue";
import {ref} from "vue";
const cursorSize = ref('large')
const cursorText = ref('中国传统色·Transitional Chinese Colors·')
</script>

<template>
  <custom-cursor :size="cursorSize" :text="cursorText"/>
  <color-panel/>
</template>

<style scoped lang="scss">


</style>