<script setup lang="ts">

defineProps({
  title: {
    type: String,
    default: ''
  },
  sentence: {
    type: String,
    default: ''
  },
  from: {
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
  <div class="color-title-container">

    <div class="color-title inset-circle" @click="handleClick">
      <transition name="fadeUp">
        <div
            class="color-title-text"
            :style="{'font-size': `${fontSize}px`}"
            v-if="show"
        >
          {{ title }}
        </div>
      </transition>
    </div>
    <transition name="fadeIn">
      <div class="color-title-desc" v-if="show">
        <div v-for="item in sentence.split('，')">
          {{ item }}
        </div>
        <div class="color-title-desc--from">
          「{{ from }}」
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.color-title-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  height: 464px;

  .color-title-desc {
    writing-mode: vertical-rl;
    color: #fff;
    font-size: 24px;
    line-height: 1.5;
    mix-blend-mode: soft-light;

    .color-title-desc--from {
      font-size: 16px;
      margin-right: 8px;
    }
  }

  .color-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    min-height: 226px;
    height: 226px;
    user-select: none;
    transition: all ease-in .3s;
    mix-blend-mode: soft-light;
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
              #fff 13px
      ),
      radial-gradient(
              circle at 0 0,
              transparent 0,
              transparent 12px,
              #fff 13px
      ),
      radial-gradient(
              circle at 100% 0,
              transparent 0,
              transparent 12px,
              #fff 13px
      ),
      radial-gradient(
              circle at 0 100%,
              transparent 0,
              transparent 12px,
              #fff 13px
      );
      background-repeat: no-repeat;
      background-position: right bottom, left top, right top, left bottom;
    }

    .color-title-text {
      line-height: 1;
      letter-spacing: 8px;
      writing-mode: vertical-rl;
    }
  }
}


</style>