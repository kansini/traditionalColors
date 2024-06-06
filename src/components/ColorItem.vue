<script setup lang="ts">

defineProps({
  title: {
    type: String,
    default: ''
  },
  fontSize: {
    type: Number,
    default: 32
  },
  show: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
</script>

<template>
  <div class="color-title inset-circle" @click="handleClick">
    <transition name="fadeIn">
      <div
          class="color-title-text"
          :style="{'font-size': `${fontSize}px`}"
          v-if="show"
      >
        {{ title }}
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.color-title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 226px;
  user-select: none;
  transition: all ease-in .3s;
  color: #fff;
  filter: brightness(1) drop-shadow(0 0 0 rgba(183, 174, 143, .5));
  overflow: hidden;

  &:hover {
    filter: brightness(1.1) drop-shadow(8px 8px 2px rgba(183, 174, 143, .5));
  }

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