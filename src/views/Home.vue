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
  })
}
onMounted(() => {
  getColor()
})
const backgroundColor = ref('')
const handleClickItem = (color: string) => {
  backgroundColor.value = color
}
</script>

<template>
  <div class="color-container" :style="{backgroundColor:backgroundColor}">
    <div class="color-group"
         v-for="(group, index) in colors"
         :key="index">
      <div class="color-group-title"> {{ group.name }}</div>
      <div class="color-group-content">
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
  </div>
</template>

<style scoped lang="scss">
.color-container {
  width: 100%;
  height: 100vh;
  transition: all ease-in .3s;

  .color-group {
    .color-group-title {
      width: 100%;
      padding: 8px 0;
    }

    .color-group-content {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;

      .color-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 40px;
        border-radius: 16px;
        background-blend-mode: difference;
        cursor: pointer;

        .color-item-name {
          font-size: 16px;
          font-weight: bold;
          color: #fff;
        }
      }
    }
  }
}

</style>