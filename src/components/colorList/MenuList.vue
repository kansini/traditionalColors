<script setup lang="ts">
import useColors from "@/hooks/useColors"

const {colorsByCategory} = useColors()
const emit = defineEmits(["clickItem"])
const handleClickItem = (gIndex: number, index: number) => {
  emit("clickItem", gIndex, index)
}
</script>

<template>
 <div class="menu-list">
      <div class="menu-group" v-for="(group, groupIndex) in colorsByCategory">
        <div class="menu-group-title">{{ group.category }}</div>
        <div class="menu-item-list">
          <div
              class="menu-item"
              v-for="(item,index) in group.data"
              :style="{background: item.hex}"
              @click="handleClickItem(groupIndex,index)">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.menu-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 32px;
  justify-content: center;

  .menu-group {
    display: flex;
    gap: 24px 16px;
    align-items: center;

    .menu-group-title {
      font-size: 20px;
      width: 20px;
    }

    .menu-item-list {
      display: flex;
      gap: 0 16px;

      .menu-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 60px;
        font-size: 12px;
        border-radius: 8px;
        color: #fff;
        opacity: .6;
        transition: all ease-in .4s;

        span {
          width: 12px;
          transition: all ease-in .4s;
        }

        &:hover {
          opacity: 1;
          border-radius: 16px;
          transform: scale(1.8);

          span {
            mix-blend-mode: difference;
          }
        }
      }
    }

  }
}
</style>