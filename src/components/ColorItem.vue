<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  fontSize: {
    type: Number,
    default: 28
  }
})
const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
</script>

<template>
  <div class="color-title inset-circle" @click="handleClick">
    <div class="color-title-text" :style="{'font-size': `${fontSize}px`}">
      {{ title }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.color-title {
  display: flex;
  justify-content: center;
  padding: 32px 24px;
  user-select: none;
  transition: all ease-in .3s;
  color: #fff;
  //border: 1px solid rgba(0, 0, 0, 1);
  //box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 1), 0 0 0 1px rgba(255, 255, 255, 1), 0 0 0 4px rgba(0, 0, 0, 1);

  &.inset-circle {
    background-size: 70% 70%;
    background-image: radial-gradient(
            circle at 100% 100%,
            transparent 0,
            transparent 12px,
            #b7ae8f 13px
    ),
    radial-gradient(
            circle at 0 0,
            transparent 0,
            transparent 12px,
            #b7ae8f 13px
    ),
    radial-gradient(
            circle at 100% 0,
            transparent 0,
            transparent 12px,
            #b7ae8f 13px
    ),
    radial-gradient(
            circle at 0 100%,
            transparent 0,
            transparent 12px,
            #b7ae8f 13px
    );
    background-repeat: no-repeat;
    background-position: right bottom, left top, right top, left bottom;
  }

  .color-title-text {
    line-height: 1;
    letter-spacing: 8px;
    font-weight: 600;
    writing-mode: vertical-rl;
  }
}
</style>