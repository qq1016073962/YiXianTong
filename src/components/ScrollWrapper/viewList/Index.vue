<template>
  <div class="view-list-index">
    <view-item-sub
      v-for="(item, index) of viewDatas"
      :key="index"
      :data="item"
    ></view-item-sub>
  </div>
</template>

<script>
import ViewItemSub from "./Sub";

export default {
  name: "ViewListIndex",
  components: { ViewItemSub },
  props: {
    viewDatas: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";
.view-list-index {
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
