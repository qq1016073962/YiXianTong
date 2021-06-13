<template>
  <div class="food-list">
    <food-list-sub
      v-for="(item, index) of foodlist"
      :key="index"
      :data="item"
    ></food-list-sub>
  </div>
</template>

<script>
import FoodListSub from "./Sub";
export default {
  name: "FoodListIndex",
  components: { FoodListSub },
  props: {
    foodlist: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";
.food-list {
  @include flex-column;
  flex-wrap: wrap;
}
</style>
