<script setup lang="ts" name="color-list">
import ColorCard from "./Card.vue"
import useColors from "@/hooks/useColors"

const {colorsByCategory} = useColors()
const emit = defineEmits(["clickItem"])
const handleClickItem = (gIndex: number, index: number) => {
  emit("clickItem", gIndex, index)
}
</script>

<template>
  <div class="color-list">
    <div class="color-list-group" v-for="(group,gIndex) in colorsByCategory">
      <div class="color-group-title">{{ group.category }}</div>
      <div class="color-list-content">
        <template v-for="(color,index) in group.data">
          <color-card :color="color" @click="handleClickItem(gIndex,index)"/>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.color-list {
  padding: 0 16px;

  .color-list-group {

    width: 100%;
    margin: 16px 0;

    .color-group-title {
      font-size: 24px;
      margin-bottom: 8px;
    }

    .color-list-content {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: space-between;
    }
  }
}
</style>