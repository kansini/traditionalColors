<script setup lang="ts">
import {computed, reactive, ref} from 'vue'
import type {CSSProperties} from 'vue'
import {useParallax} from '@vueuse/core'

const target = ref(null)
const parallax = reactive(useParallax(target))

const targetStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '500px',
  transition: '.3s ease-out all',
}
const cardWindowStyle: CSSProperties = {
  overflow: 'hidden',
  fontSize: '6rem',
  position: 'absolute',
  top: 'calc(50% - 1em)',
  left: 'calc(50% - 1em)',
  height: '2em',
  width: '2em',
  margin: 'auto',
}
// const layerBase: CSSProperties = {
//   position: 'absolute',
//   height: '100%',
//   width: '100%',
//   transition: '.3s ease-out all',
// }
const containerStyle: CSSProperties = {
  margin: '3em auto',
  perspective: '300px',
}

// const layer = computed(() => ({
//   ...layerBase,
//   transform: `translateX(${parallax.tilt * 30}px) translateY(${
//       parallax.roll * 30
//   }px) scale(1.33)`,
// }))

const cardStyle = computed(() => ({
  // background: '#fff',
  height: '20rem',
  width: '8em',
  borderRadius: '5px',
  // border: '1px solid #cdcdcd',
  overflow: 'hidden',
  transition: '.3s ease-out all',
  // boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.25)',
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
      parallax.tilt * 20
  }deg)`,
}))
</script>

<template>
  <div>
    <div ref="target" :style="targetStyle">
      <div :style="containerStyle">
        <div :style="cardStyle">
          <div :style="cardWindowStyle">
           <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>