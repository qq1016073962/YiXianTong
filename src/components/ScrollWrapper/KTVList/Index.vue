<template>
  <div class="ktv-list-index">
    <ktv-list-sub
      v-for="(item, index) of ktvDatas"
      :key="index"
      :data="item"
    ></ktv-list-sub>
  </div>
</template>

<script>
import KtvListSub from "./Sub";
export default {
  name: "KtvListIndex",
  components: { KtvListSub },
  props: {
    ktvDatas: Array,
  },
};
</script>
<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";
.ktv-list-index {
  @include flex-column;
  background-color: #fff;
}
</style>
