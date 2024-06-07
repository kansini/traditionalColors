<script lang="ts" setup>
import {computed, onMounted, onUnmounted, ref} from 'vue'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import gsap from 'gsap'

gsap.registerPlugin(ScrollToPlugin)

interface Props {
  size?: string;
  text?: string;
  innerText?: string;
  color?: number[];
}

const props = withDefaults(defineProps<Props>(), {
  size: '',
  text: '',
  innerText: ""
})
const cursorInner = ref(null)
const cursorOuter = ref(null)
const onMouseMove = (e: any) => {
  const offset = props.size == '' ? 24 : 56
  // cursorInner.value.style.opacity = 1
  gsap.to(cursorOuter.value, {
    x: e.clientX - offset,
    y: e.clientY - offset,
    opacity: 1
  })
  gsap.to(cursorInner.value, {
    x: e.clientX - 4,
    y: e.clientY - 4,
    opacity: 1
  })
}
const innerColor = computed(() => {
  const [r, g, b] = props.color as number[];
  const a = 1
  return `rgba(${r + 20},${g + 10},${b + 10},${a})`
})
onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
})
onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
})

</script>

<template>
  <div class="custom-cursor">
    <div ref="cursorOuter"
         class="custom-cursor-outer"
         :class="`cursor-${size}`"
    >
      <svg viewBox="0 0 180 180" v-if="size == 'large'">
        <path fill="transparent" id="textcircle" d="M9,90a81,81,0,1,1,81,81A81,81,0,0,1,9,90"></path>
        <text fill="#000" dy="10">
          <textPath href="#textcircle" textLength="500">{{ text }}</textPath>
        </text>
      </svg>
    </div>
    <div
        ref="cursorInner"
        class="custom-cursor-inner"
        :style="{background:innerColor}"
        :data-text="innerText"
    >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-cursor {
  div {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    pointer-events: none;
  }

  .custom-cursor-outer {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255, 0, 0, .5);
    will-change: transform;
    opacity: 0;
    mix-blend-mode: color-burn;
  }

  .custom-cursor-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(227, 0, 0, .6);
    //color: rgba(0, 0, 0, 0);
    will-change: transform;
    opacity: 0;
    font-size: 14px;
    transition: width ease .6s, height ease .6s, color ease .4s;
    overflow: hidden;
    white-space: nowrap;

    &::before {
      content: attr(data-text);
    }
  }

  .cursor-large {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    width: 160px;
    height: 160px;
    background: rgba(255, 255, 255, .1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    transition: width ease-in-out .3s, height ease-in-out .3s;

    & + .custom-cursor-inner {
      //background: $tcc-red;
      width: 56px;
      height: 56px;
      padding: 4px;
      color: rgba(0, 0, 0, 1);
    }

    svg {
      text {
        animation: rotation 10s linear infinite;
        transform-origin: 50%;
        fill: $tcc-blue;
        //letter-spacing: 6px;
        font-size: 20px;
      }
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }

  }

  .cursor-small {
    display: none;
    width: 32px;
    height: 32px;
    background: rgba(255, 0, 0, .6);
    //mix-blend-mode: color-burn;
  }

  .hidden {
    background: rgba(255, 0, 0, 0) !important;
    color: rgba(0, 0, 0, .85);
  }
}


</style>
