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
  height: 'max-content',
  width: 'max-content',
  borderRadius: '8px',
  border: '1px solid #b7ae8f',
  padding: '8px',
  overflow: 'hidden',
  transition: '.3s ease-out all',
  // boxShadow: '0 0 0 4px #b7ae8f',
  transform: `rotateX(${parallax.roll * 10}deg) rotateY(${
      parallax.tilt * 30
  }deg)`,
}))
</script>

<template>
  <div>
    <div ref="target" :style="targetStyle">
      <div :style="containerStyle">
        <div :style="cardStyle">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>