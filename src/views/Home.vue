<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {getList} from '../api/getList.ts'

interface Icolor {
  id: string;
  hex: string;
  name: string;
  intro: string;
}

interface IGroup {
  name: string;
  hex: string;
  RGB: number[];
  id: number;
  colors: Icolor[]
}

const colors = reactive<IGroup[]>([])
const getColor = () => {
  getList('colors.json').then((res: any) => {
    Object.assign(colors, res.data)
  }).finally(() => {
    console.log('colors', colors)
  })
}
onMounted(() => {
  getColor()
})
const backgroundColor = ref('')
const handleClickItem = (color:string) => {
  backgroundColor.value = color
}
</script>

<template>
  <div class="color-container" :style="{backgroundColor:backgroundColor}">
    <div class="color-group"
         v-for="(group, index) in colors"
         :key="index">
      <div class="color-group-title"> {{ group.name }}</div>
      <div class="color-item"
           @click="handleClickItem(color.hex)"
           v-for="(color, index) in group.colors"
           :key="index"
           :style="{backgroundColor: color.hex}">
        <div class="color-item-name">
          {{ color.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.color-container {
  width: 100%;
  height: 100vh;
  overflow: auto;
  transition: all ease-in .3s;

  .color-group {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;

    .color-group-title {
      width: 100%;
    }

    .color-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 160px;
      height: 80px;
      border-radius: 16px;
      background-blend-mode: difference;

      .color-item-name {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
}

</style>