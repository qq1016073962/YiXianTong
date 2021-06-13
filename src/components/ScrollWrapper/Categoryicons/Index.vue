<template>
  <div class="icon-index">
    <category-icons-sub
      v-for="(item, index) of fieldList"
      :key="index"
      :bgColor="item.bgColor"
      :icon="item.icon"
      :feild="item.field"
      :iconText="item.iconText"
    ></category-icons-sub>
  </div>
</template>

<script>
import CategoryIconsSub from "./Sub";
import fieldDatas from "data/fields";

export default {
  name: "IconIndex",
  components: {
    CategoryIconsSub,
  },
  data() {
    return {
      fieldList: fieldDatas,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
@import "~styles/variables.scss";
.icon-index {
  @include flex-row;
  flex-wrap: wrap;
  // justify-content: space-around;
  background-color: #fff;
  padding: 0.08rem;
  border-bottom: 1px solid #ddd;
}
</style>
